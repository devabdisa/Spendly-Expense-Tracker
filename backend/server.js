const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

//Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeader: ["content-Type", "Authorization"],
  })
);

app.use(express.json());

connectDB();
app.use("/api/v1/auth", authRoutes);





//Serve uploads folder 

app.use("/uploads",express.static(path.join(__dirname,"uploads")))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
