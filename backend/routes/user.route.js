const {
  register,
  findAll,
  login,
  setAvatar,
  getAllUsers,
} = require("../controller/user.controller");

const router = require("express").Router();

// ALl the Routes
router.post("/register", register);
router.post("/login", login);
router.get("/allUsers", findAll);
router.post("/setAvatar/:id", setAvatar);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;
