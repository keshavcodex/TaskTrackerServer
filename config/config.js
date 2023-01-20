const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  database_uri: process.env.ATLAS_URI,
  port: process.env.PORT,
};
