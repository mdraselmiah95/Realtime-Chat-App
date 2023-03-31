const {
  addMessage,
  getAllMessage,
} = require("../controller/message.controller");

const router = require("express").Router();

router.post("/addMsg", addMessage);
router.post("/getMsg", getAllMessage);

module.exports = router;
