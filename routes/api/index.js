const router = require("express").Router();
const doctorRoutes = require("./doctors");
const noteRoutes = require("./notes");

// doctor routes
router.use("/doctors", doctorRoutes);
// note routes
router.use("/notes", noteRoutes);

module.exports = router;

