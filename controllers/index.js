const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homepageRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const loginPageRoutes = require("./loginpageRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use('/login', loginPageRoutes);
router.use("/commentRoutes", commentRoutes);

module.exports = router;