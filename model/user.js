// models/user.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    business_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return User;
};
