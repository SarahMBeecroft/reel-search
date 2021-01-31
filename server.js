const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8080;

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`API Server now listeing on PORT ${PORT}`);
});
