const router = require("express").Router();
const apiRoute = require("./api");
const homeRoute = require("./homeroute.js");
const dashboardRoute = require("./dashboardroute.js");

router.use("/", homeRoute);
router.use("/dashboard", dashboardRoute);
router.use("/api", apiRoute);


module.exports = router;
