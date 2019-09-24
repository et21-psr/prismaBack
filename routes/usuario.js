var express = require('express');
var router = express.Router();

var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.usuario.findAll().then(usuario => {
    res.status(200).jsonp(usuario);
  })

});
//mostrar registro
router.get('/:id', function(req, res, next) {
   let id = req.params.id;
  models.usuario.findOne({
    where: {
      id_usuario: id
      }
    }).then(usuario => {
      if(usuario == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp(usuario);
    })
})
//eliminar registro
router.delete('/:id', function(req, res, next) {
   let id = req.params.id;
  models.usuario.destroy({
    where: {
      id_usuario: id
      }
    }).then(usuario => {
      if(usuario == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp({respuesta: "registro eliminado"});
    })
})
//crear registro
router.post('/', function(req, res, next) {
 let usuario = req.body;
  models.usuario.create(usuario).then(usuario => {
    res.status(200).jsonp(usuario);
  })

});



module.exports = router;
