const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");

// matches with "/api/doctors"
router.get("/", doctorsController.findAll)
router.post("/", doctorsController.create);

// matches with "/api/doctors/:id"
router.route("/:id")
    .get(doctorsController.findById)
    .put(doctorsController.update)
    .delete(doctorsController.remove);

module.exports = router;