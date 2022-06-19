const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const { MONGOURI } = require("./keys");
require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo", err);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
