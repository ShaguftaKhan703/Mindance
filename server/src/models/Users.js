import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 10
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  userDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "details" }]
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;