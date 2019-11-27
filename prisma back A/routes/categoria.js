var express = require('express');
var router = express.Router();

var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.categoria.findAll().then(categoria => {
    res.status(200).jsonp(categoria);
  })

});
//mostrar registro
router.get('/:id', function(req, res, next) {
   let id = req.params.id;
  models.categoria.findOne({
    where: {
      id_categoria: id
      }
    }).then(categoria => {
      if(categoria == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp(categoria);
    })
})
//eliminar registro
router.delete('/:id', function(req, res, next) {
   let id = req.params.id;
  models.categoria.destroy({
    where: {
      id_categoria: id
      }
    }).then(categoria => {
      if(categoria == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp({respuesta: "registro eliminado"});
    })
})
//crear registro
router.post('/', function(req, res, next) {
 let categoria = req.body;
  models.categoria.create(categoria).then(categoria => {
    res.status(200).jsonp(categoria);
  })

});


module.exports = router;
