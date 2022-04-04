require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const catsRoutes = require("./routes/cats");
const sheltersRoutes = require("./routes/shelters");
const usersRoutes = require("./routes/users");
const requestsRoutes = require("./routes/requests");
const authRoutes = require("./routes/login");

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// routing cats
app.use("/cats", catsRoutes);
app.use("/shelters", sheltersRoutes);
app.use("/users", usersRoutes);
app.use("/requests", requestsRoutes);
app.use("/login", authRoutes);

// start listening on PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
