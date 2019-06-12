"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuarios = sequelize.define("Usuario", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },

    nombre:{
        type : DataTypes.STRING
    },
    id_comentario:{
       type : DataTypes.INT
    },
    email:{
       type : DataTypes.STRING
    },
    posteo:{
        type : DataTypes.STRING
    },
    comentario:{
        type : DataTypes.STRING
    },
    id_posteo:{
        type : DataTypes.INT
    }
  }, { freezeTableName: true,
  tableName: 'usuario'});



//Tarjeta.removeAttribute('id');
  return Usuario;
};
// hesrs fg
//dfs
//bokita
//bokita
