const Messages = require("../model/message.model");

module.exports.addMessage = async (req, res, next) => {
  const { message, from, to } = req.body;
  try {
    const data = await Messages.create({
      message: { text: message },
      users: { from, to },
      sender: from,
    });
    if (data instanceof Messages) {
      return res.json({ success: true, msg: "Message added successfully" });
    } else {
      return res.json({ success: false, msg: "Failed to add message" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Failed to add message" });
  }
};
module.exports.getAllMessage = async (req, res, next) => {};
