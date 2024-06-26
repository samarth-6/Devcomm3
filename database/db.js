const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
dotenv.config();
console.log(process.env.DB_USERNAME);
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pjzcnns.mongodb.net/`;
    mongoose.connect(MONGODB_URI);
    mongoose.connection.on('connected', () => {
        console.log('Database connected Succesfully');
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
    mongoose.connection.on('error', (error) => {
        console.log('Error while connected with the database', error.message);
    });
};

module.exports = Connection; 