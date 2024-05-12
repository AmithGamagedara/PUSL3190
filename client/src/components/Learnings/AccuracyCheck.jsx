import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const AccuracyCheck = () => {
    const webcamRef = useRef(null);
    const [accuracy, setAccuracy] = useState('');
    const [error, setError] = useState('');

    const captureImage = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) {
            setError('No image captured. Ensure webcam is enabled and retry.');
            return;
        }

        // Convert imageSrc to a Blob and then post it
        fetch(imageSrc)
            .then(res => res.blob())
            .then(blob => {
                const formData = new FormData();
                formData.append('image', blob, 'image.jpg');
                return fetch('http://localhost:5000/api/classify', {
                    method: 'POST',
                    body: formData,
                });
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                console.log(data.accuracy, data.accuracy < 35);
                if (data.accuracy < 35) {
                    setAccuracy('');
                    setError('Please try again.');
                    return
                }
                if (data.accuracy && data.match) {
                    setAccuracy(`Match: ${data.match}, Accuracy: ${data.accuracy}%`);
                    setError('');
                } else {
                    throw new Error('Failed to get proper response from server.');
                }
            })
            .catch(error => {
                console.error('Error uploading or analyzing image:', error);
                setError('Failed to analyze image.');
                setAccuracy('');
            });
    };

    setTimeout(() => {
        captureImage();
    }, 3000);

    return (
        <div className='container p-4 py-24 mx-auto'>
            <h1 className="mb-4 text-2xl font-bold text-center text-red-500">Check Your Karate Pose Accuracy</h1>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-3/4 mx-auto border-2 border-black md:w-1/2"
                videoConstraints={{ width: 440, height: 240 }}
            />
            {/* <button 
                onClick={captureImage} 
                className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Check Accuracy
            </button> */}
            <div className="mt-8">
                {error && <p className="text-center text-red-500">{error}</p>}
                {accuracy && <p className="text-2xl font-semibold text-center text-green-500">{accuracy}</p>}
            </div>
            <p className='mt-4 italic text-center'>*To use this feature, make sure there is a clear background.</p>
        </div>
    );
};


export default AccuracyCheck;
