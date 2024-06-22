import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/Users.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ email, username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User created successfully!" });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const isEmail = (str) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(str)) {
      return true;
    } else return false;
  };

  const user = isEmail(username) ? await UserModel.findOne({ email: username }) : await UserModel.findOne({ username: username });
  console.log(user);

  if (!user) {
    return res.json({ message: "User does not exist!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Invalid credentials!" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token, userID: user._id, username: user.username });
});

export { router as userRouter };