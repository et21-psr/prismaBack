"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },

    nombre:{
        type : DataTypes.STRING
    },
    email:{
       type : DataTypes.STRING
    },
    clave_admin:{
      type : DataTypes.STRING
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
  tableName: 'usuario'});



//Tarjeta.removeAttribute('id');
  return Usuario;
};
// hesrs fg
//dfs
//bokita
//bokita
