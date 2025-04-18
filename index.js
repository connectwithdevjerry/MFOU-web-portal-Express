const express = require("express");
const cors = require("cors");
const mycon = require("./db");
const spatialRoute = require("./router/spatial.route");

const app = express();
require("dotenv").config();

const corsOptions = {
  origin: ["https://dionwebportal.vercel.app", "http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));

// mycon.query();

app.use("/spatial", spatialRoute);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server error", err);
  } else {
    console.log(`check running server on url http://localhost:${PORT}`);
  }
});
