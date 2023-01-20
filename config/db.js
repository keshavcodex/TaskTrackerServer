const mongoose = require("mongoose");

const { database_uri, port } = require("./config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(database_uri);

    console.log(`Database Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
