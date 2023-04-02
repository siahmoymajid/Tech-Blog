const User = require("./user.js");
const Post = require("./post.js");
const Comment = require("./comment.js");

Post.belongsTo(User, { foreignKey: "user_id" });
Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(User,{foreignKey: "user_id"});

module.exports={User,Post, Comment};