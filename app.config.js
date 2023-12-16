require("dotenv").config();

module.exports = {
  name: "Aksoft Managment",
  version: "1.0.0",
  extra: {
    API_KEY: process.env.API_KEY,
  },
};
