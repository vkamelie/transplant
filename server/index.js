const express = require("express");
const connectDB = require("./db");
const passportSetup = require("./passport-setup");
const authRoutes = require("./routes/api/auth");
const profileRoutes = require("./routes/api/profile");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();

connectDB();
const app = express();
app.use(express.json({ extended: false }));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("api running"));

//Define Routes
app.use("/api/auth", authRoutes);
app.use("/api", profileRoutes);
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`It's all good on ${PORT}`));
