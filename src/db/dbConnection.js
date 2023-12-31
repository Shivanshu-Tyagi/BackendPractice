const mongoose = require("mongoose");
const dotenv = require('dotenv');
const { DB_NAME } = require('../constant');

dotenv.config({ path: './env' });

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log('Connected to the database');
  } catch (error) {
    console.error('ERROR:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
