import os
import sys
import cv2
import mediapipe as mp
import json
import numpy as np
from scipy.spatial import distance
import base64

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

# Function to extract relevant landmarks from an image
def extract_landmarks_from_image(image_path):
    image = cv2.imread(image_path)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = pose.process(image_rgb)

    if results.pose_landmarks:
        landmarks = results.pose_landmarks.landmark
        return [[landmarks[i].x, landmarks[i].y] for i in LANDMARKS]
    return None

# Prepare the dataset by extracting features and saving to a JSON file
def prepare_dataset(dataset_dir, output_json):
    dataset_features = {}
    for category in ["Punch", "Block"]:
        category_path = os.path.join(dataset_dir, category)
        if os.path.exists(category_path):
            for move_type in os.listdir(category_path):
                move_path = os.path.join(category_path, move_type)
                if os.path.isdir(move_path):
                    dataset_key = f"{category} - {move_type}"
                    dataset_features[dataset_key] = []
                    for image_file in os.listdir(move_path):
                        image_path = os.path.join(move_path, image_file)
                        features = extract_landmarks_from_image(image_path)
                        if features is not None:
                            dataset_features[dataset_key].append(features)

    with open(output_json, "w") as outfile:
        json.dump(dataset_features, outfile)

# Load dataset features from a JSON file
def load_dataset_features(json_path):
    with open(json_path, "r") as infile:
        return json.load(infile)

# Calculate similarity between input features and dataset features
def calculate_similarity(input_features, dataset_features):
    best_match = None
    best_score = float("inf")

    for punch_block_type, features_list in dataset_features.items():
        for features in features_list:
            score = distance.euclidean(np.array(input_features).flatten(), np.array(features).flatten())
            if score < best_score:
                best_score = score
                best_match = punch_block_type

    normalized_score = best_score / (best_score + 1)

    # Calculate accuracy as 1 - normalized_score
    accuracy = (1 - normalized_score) * 100
    # accuracy = max(0, 100 - best_score)  # Adjust this formula based on empirical testing
    return best_match, accuracy

# Extract relevant landmarks from the live camera feed
def extract_landmarks_from_live_feed(landmarks):
    return [[landmarks[i].x, landmarks[i].y] for i in LANDMARKS]
# Main real-time detection loop
def main(image_path):
    # Update the dataset path to the one you've provided
    image = cv2.imread(image_path)
    # dataset_dir = r"C:\Users\amith\OneDrive\Desktop\karate_moves_dataset"
    output_json = "karate_features.json"

    # Prepare and process the dataset and cache the features to 'karate_features.json'
    # prepare_dataset(dataset_dir, output_json)

    dataset_features = load_dataset_features(output_json)

    # cap = cv2.VideoCapture(0)

    # while cap.isOpened():

    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # cv2.imshow('frame', image_rgb)
    # cv2.waitKey(1000)
    results = pose.process(image_rgb)
    # print(results.pose_landmarks)

    if results.pose_landmarks:
        input_features = extract_landmarks_from_live_feed(results.pose_landmarks.landmark)

        # Compare with the dataset and compute similarity
        match, accuracy = calculate_similarity(input_features, dataset_features)
        print(json.dumps({'match': match, 'accuracy': accuracy}))
           # Display match and accuracy information on separate lines
            # cv2.putText(image, f"Match: {match}", (10, 30),
            # cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
            # cv2.putText(image, f"Accuracy: {accuracy:.2f}%", (10, 60),
            # cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)

            # Show the live camera feed
            # cv2.imshow('Karate Punch/Block Accuracy', image)


        # if cv2.waitKey(1) & 0xFF == 27:  # Press ESC to exit
            # break

    # cap.release()
    # cv2.destroyAllWindows()

if __name__ == "__main__":
    image_path = sys.argv[1]
    # print(image_path)
    main(image_path)
