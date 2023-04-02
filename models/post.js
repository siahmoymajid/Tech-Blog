const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const User = require("./user.js");
const Comment = require("./comment.js");

class Post extends Model {}

Post.init(
  {
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  
  },
  {
    sequelize
    
  }
);



module.exports = Post;
