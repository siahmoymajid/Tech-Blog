const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all post and JOIN with user data
    const postData = await Post.findAll({
      include: [User]

    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render("dashboard", {
      posts, message: 'here is dashboard', logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });

    res.render("post", { post , logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const post = await Post.destroy({where: {id: req.params.id}});


    res.render("post", { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
