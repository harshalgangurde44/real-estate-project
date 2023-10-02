const mongoose = require("mongoose");

const getConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://harshalg:jIUmTYRS86P0aD08@app.wen0ngb.mongodb.net/real-estate-catalog-list"
  );
  console.log("Connected to database successfully...!");
};

module.exports = getConnection;
