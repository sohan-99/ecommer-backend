// server.js
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// port
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());

app.use('/api', require('./routes/authRoutes'));

app.get("/", (req, res) => res.send("Hello, world!"));


app.listen(port, () => console.log("Server running on port", port));
