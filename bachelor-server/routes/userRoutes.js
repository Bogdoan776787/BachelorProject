const router = require("express").Router();
const User = require("../models/User.js");

//Sign Up user

router.post("/", async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userPicture } = req.body;
    console.log(req.body);
    const user = await User.create({
      userName,
      userEmail,
      userPassword,
      userPicture,
    });
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = "This user already exists";
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg);
  }
});

//Sign In the user

router.post("/signin", async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await User.findByCredentials(userEmail, userPassword);
    user.status = "active";
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
