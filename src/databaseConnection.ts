const mongoose = require('mongoose');
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
dotenv.config();

const {DBURI} = process.env;

const connectToDatabase = async (): Promise<void> => {
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  await mongoose.connect(DBURI, options);
};

export { connectToDatabase };
