var express = require('express'); // have acces to the whole express API

// Creat our own app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));
app.listen(PORT, function() {
  console.log("express server is up on port " + PORT);
});
