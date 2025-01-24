const User = require("../models/User.Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const nodemailer = require("nodemailer");
const rn = require("random-number");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.register = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const err = new Error("Email already exists! Please try again.");
      err.statusCode = 400;
      return next(err);
    } else {
      const user = await User.create(req.body);
      res.status(200).json({user});
    }
  } catch (error) {
    res.json(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }); //kiểm tra email
    if (!user) {
      const err = new Error("Incorrect email - Please re-enter");
      err.statusCode = 400;
      return next(err);
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      //compare user entered pw and pw (hash) in db
      const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
      res.status(200).json({
        token,
        userName: user.name,
        userId: user._id,
        user_position: user.position
      });
    } else {
      const err = new Error("Password is incorrect - Please re-enter");
      err.statusCode = 400;
      return next(err);
    }
  } catch (error) {
    res.json(error);
  }
};

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.getAllUser = async (req, res, next) => {
  const usersCount = await User.countDocuments();
  try {
    const users = await User.find({});
    res.status(200).json({ users, usersCount });
  } catch (error) {
    res.json(error);
  }
};

exports.getOneUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(userId, { ...req.body });
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
};

exports.changePasswordUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (bcrypt.compareSync(req.body.passwordCurrent, user.password)) {
      user.password = req.body.passwordNew;
      user.save();
      res.status(200).json(user);
    } else {
      const err = new Error("Current password is incorrect");
      err.statusCode = 400;
      return next(err);
    }
  } catch (error) {
    res.json(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const err = new Error("Email is incorrect or does not exist");
      err.statusCode = 400;
      return next(err);
    }
    const options = {
      min: 10000,
      max: 99999,
      integer: true,
    };
    const code = rn(options);
    let config = {
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAILPASS}`,
      },
    };
    let transporter = nodemailer.createTransport(config);
    await transporter.sendMail({
      from: "reactflix.cinema@gmail.com",
      to: email,
      subject: "React Flix Account",
      text: `
      Hi! Are you the one who wants to reset this password?\
      Use this code to update the password for the account ${email}\n
      Here is your code: ${code}\
      Thank you,\
      React Flix Cinema
    `,
    });
    res.status(200).json({ code: code });
  } catch (error) {
    console.log(error);
  }
};

exports.updateNewPasswordUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      user.password = req.body.password;
      user.save();
      res.status(200).json(user);
    }
  } catch (error) {
    res.json(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
      const {userId} = req.params;
      await User.findByIdAndDelete(userId)
      res.status(200).json({
          status: 'success',
          message: 'User has been deleted'
      })
  } catch (error) {
      res.json(error)
  }
}
