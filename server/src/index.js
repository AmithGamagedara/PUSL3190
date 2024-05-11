const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const { spawn } = require('child_process');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const os = require('os');
const path = require('path');
const cors = require('cors');

// app.get('/', (req, res) => {
//     let dataToSend;
//     // spawn new child process to call the python script
//     const python = spawn('python', ['C:/Users/amith/OneDrive/Desktop/Individual Project/Client/server/src/Python_Service/ShotAcuracy.py']);
//     // collect data from script
//     console.log(python.stdout)
//     python.stdout.on('data', function (data) {
//         console.log('Pipe data from python script ...');
//         dataToSend = JSON.parse(data.toString());
//     });
//     // in close event we are sure that stream from child process is closed
//     python.on('close', (code) => {
//         console.log(`child process close all stdio with code ${code}`);
//         // send data to browser
//         res.send(dataToSend)
        
//     });
// })
app.use(cors());
app.post('/api/classify', upload.single('image'), async (req, res) => {
    // console.log(req.file.buffer.toString('base64'));
    if (!req.file) {
        return res.status(400).send('No image uploaded.');
    }

    // Write the image data to a temporary file
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, 'tempImage.png');
    fs.writeFileSync(tempFilePath, req.file.buffer);
    // C:\Users\amith\AppData\Local\Temp\tempImage.png
    // Pass the path of the temporary file to the Python script
    const python = await spawn('python', ['src/Python_Service/webcam.py', tempFilePath]);
    var resdt = {};
    await python.stdout.on('data', async (data) => {
        console.log(data.toString());
        resdt = await JSON.parse(data.toString());
    });

    python.stderr.on('data', (data) => {
        // console.error(`stderr: ${data}`);
    });

    python.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        return res.json(resdt)
    });;
})

// app.post('/api/classify', upload.single('image'), async (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No image uploaded.');
//     }

//     try {
//         const response = await axios.post('http://localhost:5000/analyze', req.file.buffer, {
//             headers: {
//                 'Content-Type': 'application/octet-stream',
//             },
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error calling Python API:', error);
//         res.status(500).json({ message: 'Error processing image' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
