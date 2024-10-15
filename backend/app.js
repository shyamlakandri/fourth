const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRoutes = require("./Routes/userRoutes");

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// User routes
app.use("/api/v1", userRoutes);

module.exports = app;
