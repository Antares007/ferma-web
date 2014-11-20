var router = require('express').Router();
module.exports = router;

router.get('/', function (req, res) {
  var fs = require('fs');
  fs.readFile('ferma.json', 'utf8', function(err, str) {
    if(err) return res.send(501);

    res.send(makeD3tree(JSON.parse(str)));
  });
});

function makeD3tree(dzrokhebi) {

  return dzrokhebi;
}
