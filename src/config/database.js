const mongoose = require('mongoose');
const { MONGODB_URL } = require('./serverConfig');

const connectDB = async () => {
    try {
        // console.log('Connecting to MongoDB...', MONGODB_URL);
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to MongoDB successfully.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;
