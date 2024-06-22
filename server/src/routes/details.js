import express from 'express';
import { DetailsModel } from "../models/Details.js";
import UserModel from '../models/Users.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Create new user details - User details form page
router.post('/', verifyToken, async (req, res) => {
  const details = new DetailsModel(req.body);
  console.log(details);

  try {
    const response = await details.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Save user details - Save button - User details form last page
router.put('/', async (req, res) => {
  const details = await DetailsModel.findById(req.body.detailsID);
  const user = await UserModel.findById(req.body.userID);

  try {
    user.userDetails.push(details);
    await user.save();
    res.status(201).json({ userDetails: user.userDetails });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all users' details
/* router.get('/', async (req, res) => {
  try {
    const response = await DetailsModel.find({});
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
}); */

// Get a user's details by ID - User profile page
/* router.get('/profile/:userID', async (req, res) => {
  try {
    const response = await DetailsModel.findById(req.params.userID);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
}); */

// Get saved user details
router.get('/userDetails/:userID', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const userDetails = await DetailsModel.find({
      _id: { $in: user.userDetails },
    });
    console.log(userDetails);
    res.status(200).json({ userDetails });
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as detailsRouter };