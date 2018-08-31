const router = require("express").Router();
const notesController = require("../../controllers/notesController");

// matches with "/api/notes"
router.get("/", notesController.findAll)
router.post("/", notesController.create);

// matches with "/api/notes/:id"
router.route("/:id")
    .get(notesController.findById)
    .put(notesController.update)
    .delete(notesController.remove);

module.exports = router;