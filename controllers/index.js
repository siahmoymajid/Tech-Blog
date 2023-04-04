const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeroute.js");
const dashboardRoute = require("./dashboardroutes.js");

router.use("/", homeRoute);
router.use("/dashboard", dashboardRoute);
router.use("/api", apiRoute);


module.exports = router;
