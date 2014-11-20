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
  var data = {
    name: "adam+eva",
    children: [
      {
      name: "x1",
      children: [
        {
        name: "x1",
        size: 4
      },
      {
        name: "x1+f1",
        children: [
          {
          name: "x2",
          size: 0.1
        },
        {
          name: "x3",
          size: 3
        }
        ]
      },
      {
        name: "x1+f2",
        children: [
          {
          name: "x4",
          size: 1
        },
        {
          name: "f3",
          size: 3
        }
        ]
      }
      ]
    },
    {
      name: "ffff1",
      size: 4
    },
    {
      name: "f2",
      size: 3
    }
    ]
  };

  return data;
}
