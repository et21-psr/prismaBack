var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.posteo.findAll().then(posteo => {
    res.status(200).jsonp(posteo);
  })

});
//mostrar registro
router.get('/:id', function(req, res, next) {
   let id = req.params.id;
  models.posteo.findOne({
    where: {
      id_posteo: id
      }
    }).then(posteo => {
      if(posteo == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp(posteo);
    })
})
//eliminar registro
router.delete('/:id', function(req, res, next) {
   let id = req.params.id;
  models.posteo.destroy({
    where: {
      id_posteo: id
      }
    }).then(posteo => {
      if(posteo == null){
          res.status(200).jsonp({respuesta: "No existe"});
      }
      res.status(200).jsonp({respuesta: "registro eliminado"});
    })
})
//crear registro
router.post('/', function(req, res, next) {
 let posteo = req.body;
  models.posteo.create(posteo).then(posteo => {
    res.status(200).jsonp(posteo);
  })

});

//mostrar registro
router.get('/titulo/:titulo', function(req, res, next) {
  let titulo = req.params.titulo;
 models.posteo.findAll({
   where: {
     titulo: { [Op.substring]: titulo}
     }
   }).then(posteo => {
     if(posteo == null){
         res.status(200).jsonp({respuesta: "No existe"});
     }
     res.status(200).jsonp(posteo);
   })
})



module.exports = router;
