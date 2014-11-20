require('traceur').require.makeDefault(function(filename) {
  return filename.indexOf('node_modules') === -1;
}, {'experimental': true, 'sourceMaps': true });

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('ferma!');
});

app.use('/ferma', require('./ferma.js'));

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
