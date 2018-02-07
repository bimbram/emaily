const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'})
});

//dynamically figure out PORT environment variable

app.listen(PORT);
