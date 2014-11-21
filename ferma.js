var router = require('express').Router();
var _ = require('lodash');

module.exports = router;

router.get('/', function (req, res) {
  var fs = require('fs');
  fs.readFile('ferma.json', 'utf8', function(err, str) {
    if(err) return res.send(501);

    res.send(makeD3tree(JSON.parse(str)));
  });
});

var data = {name:"adam+eva",children:[{name:"x1",children:[{name:"x1",size:4},{name:"x1+f1",children:[{name:"x2",size:0.1},{name:"x3",size:3}]},{name:"x1+f2",children:[{name:"x4",size:1},{name:"f3",size:3}]}]},{name:"ffff1",size:4},{name:"f2",size:3}]};

function makeD3tree(dzrokhebi) {
  dzrokhebi = dzrokhebi.map(v => {
    return {
      name: v.skesi + '-' + v.n,
      skesi: v.skesi,
      ojakhi: v.mama + ' da ' + v.deda,
      ojakhebi: v.skesi !== 'ფური' ? Object.keys(v.ojakhebi).map(key => v.n + ' da ' + key) : undefined,
      size: Math.floor((Date.now() - new Date(v.dabDge)) / 1000 / 60 / 60 / 24)
    };
  });
  var ns = {};
  var getNode = (name) => ns[name] ? ns[name] : (ns[name] = {name: '', children: []}, ns[name]);
  for(var d of dzrokhebi){
    if(d.ojakhebi){
      getNode(d.ojakhi).children.push(
        {name:'', children: d.ojakhebi.map(o => getNode(o)).concat([d])}
      );
    } else {
      getNode(d.ojakhi).children.push(d);
    }
  }
  var ojakhebi =  _.groupBy(dzrokhebi, g => g.ojakhi);
  return ns['adam da eva'];
}
