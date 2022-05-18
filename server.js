const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
require("./passportSetup");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["ksreact"],
    maxAge: 1 * 60 * 60 * 1000,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
