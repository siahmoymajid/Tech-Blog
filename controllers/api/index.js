const router = require("express").Router();
const userRoutes = require("./userroute.js");
const postRoutes = require("./postroute.js");
const commentRoutes= require("./comment.js");

router.use("/user",userRoutes)
router.use("/comment", commentRoutes);
router.use("/post", postRoutes);

module.exports=router