const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = process.env.PORT || 5000

const app = express();

passport.use(new GoogleStrategy());


app.get('/', (req, res) => {
  res.send({hi: 'there'})
});

//dynamically figure out PORT environment variable

app.listen(PORT);
