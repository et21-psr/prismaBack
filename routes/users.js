var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var usuario= [{
    nombre : "vamos",
    apellido : "vai",
    dirección : "callefalsa 123"
  },{
    nombre : "vamos",
    apellido : "bruno",
    dirección : "av.siempreviva"
  }]
  res.status(200).jsonp(usuario);
});




module.exports = router;
