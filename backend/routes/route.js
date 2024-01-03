const router = require("express").Router();

const {
  addPuck,
  getPuck,
  deletePuck,
} = require("../controllers/userController");

router.get("/getpuck", getPuck);
router.post("/addpuck", addPuck);
router.delete("/deletepuck/:id", deletePuck);

module.exports = router;