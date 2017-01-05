var express = require('express'); // have acces to the whole express API

// Creat our own app
var app = express();
app.use(express.static('public'));

app.listen(3000, function() {
  console.log("express server is up on port 3000");
});
