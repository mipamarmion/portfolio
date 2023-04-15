const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

// start express server on port 5000
app.listen(process.env.PORT, () => {
  console.log("server started on port " + process.env.PORT);
});
