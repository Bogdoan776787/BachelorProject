const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Can not be empty"],
    },
    userEmail: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Can not be empty"],
      index: true,
      validate: [isEmail, "invalid email"],
    },
    userPassword: {
      type: String,
      required: [true, "Can not be empty"],
    },
    userPicture: {
      type: String,
    },
    newMessages: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "active",
    },
  },
  { minimize: false }
);

//Hashing and salt the password before saving
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("userPassword")) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.userPassword, salt, function (err, hash) {
      if (err) return next(err);
      user.userPassword = hash;
      next();
    });
  });
});

//delete user password property before return in respons
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.userPassword;
  return userObject;
};

// finding user by credentials
UserSchema.statics.findByCredentials = async function (
  userEmail,
  userPassword
) {
  const user = await User.findOne({ userEmail });
  if (!user) throw new Error("Incorrect password or email");

  const isMatch = await bcrypt.compare(userPassword, user.userPassword);
  if (!isMatch) throw new Error("Incorrect password or email");
  return user;
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
