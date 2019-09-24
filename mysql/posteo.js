"use strict";

module.exports = function(sequelize, DataTypes) {
  var Posteo
   = sequelize.define("posteo", {
    id_posteo: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true

    },

    titulo:{
        type : DataTypes.STRING
    },

    contenido:{
        type : DataTypes.STRING
    },

     creador:{
       type : DataTypes.STRING
    },
    imagen:{
        type : DataTypes.STRING
    },
    id_usuario:{
      type : DataTypes.INTEGER
   },
   id_categoria:{
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
  tableName: 'posteo'});



//Tarjeta.removeAttribute('id');
  return Posteo;
};
