"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comentario = sequelize.define("comentario", {
    id_comentario:{
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },

contenido:{
       type : DataTypes.STRING
    },
id_usuario:{
        type : DataTypes.INTEGER
    },
id_posteo:{
        type : DataTypes.INTEGER
    },
fecha:{
        type : DataTypes.DATE
    },
id_comentariopadre:{
            type : DataTypes.INTEGER
        },
createdAt:{
      type : DataTypes.DATE,
      field: "created_at"
    },
updatedAt : {
      type : DataTypes.DATE,
      field: "updated_at"
    }
  }, { freezeTableName: true,
  tableName: 'comentario'});



//Tarjeta.removeAttribute('id');
  return Comentario;
};
