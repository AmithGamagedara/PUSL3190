from flask import Flask, request, jsonify
import cv2
import mediapipe as mp
import numpy as np
import json
from scipy.spatial import distance

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

# Landmark indices of interest
LANDMARKS = [
    11,  # Left shoulder
    12,  # Right shoulder
    13,  # Left elbow
    14,  # Right elbow
    15,  # Left wrist
    16,  # Right wrist
    23,  # Left hip
    24   # Right hip
]

app = Flask(__name__)

# Load dataset features from a JSON file
def load_dataset_features(json_path):
    with open(json_path, 'r') as infile:
        return json.load(infile)

dataset_features = load_dataset_features("karate_features.json")

# Extract relevant landmarks from an image
def extract_landmarks(image):
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = pose.process(image_rgb)
    if results.pose_landmarks:
        landmarks = results.pose_landmarks.landmark
        return [[landmarks[i].x, landmarks[i].y] for i in LANDMARKS]
    return None

# Calculate similarity between input features and dataset features
def calculate_similarity(input_features, dataset_features):
    best_match = None
    best_score = float('inf')
    for punch_block_type, features_list in dataset_features.items():
        for features in features_list:
            score = distance.euclidean(np.array(input_features).flatten(), np.array(features).flatten())
            if score < best_score:
                best_score = score
                best_match = punch_block_type
    accuracy = max(0, 100 - best_score)
    return best_match, accuracy

@app.route('/analyze', methods=['POST'])
def analyze_pose():
    file = request.files['image']
    if not file:
        return jsonify({'error': 'No image file provided'}), 400

    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    input_features = extract_landmarks(img)
    if input_features is None:
        return jsonify({'error': 'Unable to detect landmarks'}), 400

    match, accuracy = calculate_similarity(input_features, dataset_features)
    return jsonify({'match': match, 'accuracy': accuracy})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


