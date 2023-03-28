const { register, findAll } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", register);
router.get("/register", findAll);

module.exports = router;
