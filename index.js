const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = process.env.PORT || 5000

const app = express();

// client id
// 174390895177-uh1lna042bb2b948r9i88varpdbvh5j3.apps.googleusercontent.com
// client secret
// gSTrv88SFy6DvV9RmNIq4RNS

passport.use(new GoogleStrategy());


app.get('/', (req, res) => {
  res.send({hi: 'there'})
});

//dynamically figure out PORT environment variable

app.listen(PORT);
