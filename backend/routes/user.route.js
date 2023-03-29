const {
  register,
  findAll,
  login,
  setAvatar,
} = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/register", findAll);
router.post("/setAvatar/:id", setAvatar);

module.exports = router;
