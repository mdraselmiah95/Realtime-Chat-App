module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;

    if (!userId || !avatarImage) {
      return res.status(400).json({
        status: "Fail",
        error: "Missing required data",
      });
    }

    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    ).select("isAvatarImageSet avatarImage");
    if (!userData) {
      return res.status(404).json({
        status: "Fail",
        error: "User not found",
      });
    }

    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Fail",
      error: "An error occurred",
    });
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username: userUsername, password } = req.body;
    const user = await User.findOne({ username: userUsername }).select(
      "+password"
    );

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect username or password",
      });
    }

    const { _id, username, email, name } = user;
    const token = generateToken({ _id });

    return res.status(200).json({
      status: "success",
      data: { _id, username, email, name, token },
      message: "User Login Successfully",
    });
  } catch (error) {
    next(error);
  }
};
