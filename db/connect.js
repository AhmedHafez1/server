const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo DB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectMongo;
