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


app.use(cors());
app.post('/api/classify', upload.single('image'), async (req, res) => {

    if (!req.file) {
        return res.status(400).send('No image uploaded.');
    }

    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, 'tempImage.png');
    fs.writeFileSync(tempFilePath, req.file.buffer);
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

// // Middleware
// app.use(express.json()); // for parsing application/json

// // Routes
// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
