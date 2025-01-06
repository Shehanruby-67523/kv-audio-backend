import Review from "../models/review.js";

export function addReview(req,res){
  if (req.user == null){
    res.status(401).json({
      message: "You must be logged in to add a review"
    });
    return;
  }
}