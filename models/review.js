import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  email: { // This is the email of the user who is writing the review
    type: String, 
    required: true,
    unique: true
  },

  name: { // This is the name of the user who is writing the review
    type: String,
    required: true
  },

  rating: { // This is the rating of the product
    type: Number,
    required: true
  },

  comment: { // This is the comment of the user
    type: String,
    required: true
  },

  date: { // This is the date of the review
    type: Date,
    required: true,
    default: Date.now()
  },

  profilePicture: { // This is the profile picture of the user
    type: String,
    required: true,
    default: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
  },

  isApproved: { // This is the status of the review
    type: Boolean,
    required: true,
    default: false
  }
})

const Review = mongoose.model("Review",reviewSchema);

export default Review;