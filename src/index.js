const express = require("express");
const cors = require("cors");
const { connect } = require("./config/config");
const UR = require("./routes/user");
const BR = require("./routes/bmi");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", UR);
app.use("/bmi", BR);

app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(8080, async () => {
  try {
    await connect();
    console.log("listening on http://localhost:8080");
  } catch (e) {
    console.log(e);
  }
});
