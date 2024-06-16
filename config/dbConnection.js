const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://asivateja1999:K5sJkBwjlMoRr5yj@crud-cluster.hgnc6bp.mongodb.net/Short-Url",
      {
        serverSelectionTimeoutMS: 10000, // Set a longer timeout (in milliseconds)
      }
    );
    console.log(`Connected to MongoDB Database : ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Mongo DB Connection Error : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
