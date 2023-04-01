const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const User = require("./user.js");
const Comment = require("./comment.js");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

Post.belongsTo(User, { foreignKey: "user_id" });
Post.hasMany(Comment, { foreignKey: "post_id" });

module.exports = Post;
