require("dotenv").config();
const express = require("express");
const router = require("./routes/Routes");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.use("/api/shop/", router);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
