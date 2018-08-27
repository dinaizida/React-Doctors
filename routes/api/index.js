const router = require("express").Router();
const doctorRoutes = require("./doctors");

// doctor routes
router.use("/doctors", doctorRoutes);

module.exports = router;

