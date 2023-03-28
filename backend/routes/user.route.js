const { register, findAll, login } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/register", findAll);

module.exports = router;
