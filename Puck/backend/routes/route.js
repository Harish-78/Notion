const router = require("express").Router();

const {
  addPuck,
  getPuck,
  deletePuck,
  updateWiki,
} = require("../controllers/userController");

router.get(`/getpuck`, getPuck);
router.post("/addpuck", addPuck);
router.patch("/update/:id", updateWiki);
router.delete("/deletepuck/:id", deletePuck);

module.exports = router;
