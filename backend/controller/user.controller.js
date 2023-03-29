const User = require("../model/user.model");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.status(200).json({
      status: "success",
      data: user,
      message: "User Login Successfully",
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't Set the Avatar",
    });
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.status(200).json({
      status: "success",
      data: user,
      message: "User created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: "Success",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't create the User",
    });
  }
};
