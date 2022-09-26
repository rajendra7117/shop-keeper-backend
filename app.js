const express = require("express");
const router = require("./routes/Routes");
const app = express();

app.use(express.json());

app.use("/api/shop/", router);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message });
});

app
  .use("/", (req, res) => {
    res.send("hi");
  })
  .listen(8000);
