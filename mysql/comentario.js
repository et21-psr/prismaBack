"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comentario = sequelize.define("Comentario", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    usuario:{
        type : DataTypes.STRING
    },
    fecha:{
        type : DataTypes.DATE
    },
    id_usuario:{
       type : DataTypes.INT
    },
    id_posteo:{
        type : DataTypes.INT
    },
    contenido:{
       type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'comentario'});



//Tarjeta.removeAttribute('id');
  return Comentario;
};
