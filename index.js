require("dotenv/config");
require("./src/services/passport");
const keys = require('./src/config/keys')
const mongoose = require('mongoose');
const cookieSession = require("cookie-session");
const passport = require('passport');
const express = require("express");
const PORT = process.env.PORT || 8000;

mongoose.connect(keys.mongoURI, { dbName: keys.mongoNAME });

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require("./src/routes/auth")(app);

app.listen(PORT, () => console.log("App runs on port: ", PORT));
