import mongoose from "mongoose";

const DetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  feeling: {
    type: String,
    required: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
  mentalHealth: {
    type: String,
    required: true,
  },
  physicalHealth: {
    type: String,
    required: true,
  },
  therapy: {
    type: String,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }
});

export const DetailsModel = mongoose.model('details', DetailsSchema);