const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setUpAndStartServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

setUpAndStartServer();  
