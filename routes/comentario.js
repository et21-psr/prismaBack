var express = require('express');
var router = express.Router();

var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.comentario.findAll().then(comentario => {
    res.status(200).jsonp(comentario);
  })

});
//mostrar registro
router.get('/:id', function(req, res, next) {
   let id = req.params.id;
  models.comentario.findOne({
    where: {
      id_comentario: id
      }
    }).then(comentario => {
      if(comentario == null){
          res.status(200).jsonp({respuesta: "No existe"});
      } 
      res.status(200).jsonp(comentario);
    })
})
//eliminar registro
router.delete('/:id', function(req, res, next) {
   let id = req.params.id;
  models.comentario.destroy({
    where: {
      id_comentario: id
      }
    }).then(comentario => {
      if(comentario == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp({respuesta: "registro eliminado"});
    })
})
//crear registro
router.post('/', function(req, res, next) {
 let comentario = req.body;
  models.comentario.create(comentario).then(comentario => {
    res.status(200).jsonp(comentario);
  })

});



module.exports = router;
