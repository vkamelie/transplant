const express = require("express");
const connectDB = require("./db");
const passportSetup = require("./passport-setup");
const authRoutes = require("./routes/api/auth");
const profileRoutes = require("./routes/api/profile");

const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors");

dotenv.config();

connectDB();
const app = express();

app.use(cors());

app.use(express.json({ extended: false }));
app.use(passport.initialize());

app.get("/", (req, res) => res.send("api running"));

//Define Routes
app.use("/api/auth", authRoutes);
// app.use("/api", profileRoutes);
// app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`It's all good on ${PORT}`));
