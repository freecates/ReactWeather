var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (res.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http;//' + res.hostname + res.url);
  }
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port ' + PORT);
});
