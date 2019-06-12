"use strict";

module.exports = function(sequelize, DataTypes) {
  var Categoria = sequelize.define("Categoria", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre:{
        type : DataTypes.STRING
    },
    id_categoria_padre:{
        type : DataTypes.INT
    },
    contenido:{
       type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'categoria'});



//Tarjeta.removeAttribute('id');
  return Categoria;
};
