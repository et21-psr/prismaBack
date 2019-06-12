"use strict";

module.exports = function(sequelize, DataTypes) {
  var Posteo
   = sequelize.define("Posteo", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    contenido:{
        type : DataTypes.STRING
    },
    titulo:{
        type : DataTypes.STRING
    },
     creador:{
       type : DataTypes.STRING
    },
    imagen:{
        type : DataTypes.STRING
    },
    id_usuario:{
      type : DataTypes.INT
   },
   id_categoria:{
     type : DataTypes.INT
  },
  categoria:{
    type : DataTypes.STRING
 },


  }, { freezeTableName: true,
  tableName: 'posteo'});



//Tarjeta.removeAttribute('id');
  return Posteo;
};
