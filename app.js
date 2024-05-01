const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const admisionRouter = require("./Route/AdmissionRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello everyone");
});

app.use("/api/admission", admisionRouter);

app.listen(process.env.PORT);

async function dbconnection() {
  try {
    const res = await mongoose.connect(process.env.CONNECT);
    const data = await res.default;
    console.log(data.STATES.connected);
  } catch (error) {
    console.log(error.message);
  }
}

dbconnection();
