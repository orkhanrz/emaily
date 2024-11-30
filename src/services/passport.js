const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const keys = require("../config/keys");
const User = require("../models/user");

// User here is coming from google strategy's callback function.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Take user's id from serializeUser and turn into into a user.
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  if (!user){
    return done(true, null);
  };

  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = new User({ googleId: profile.id });
        await user.save();
      }

      done(null, user);
    }
  )
);
