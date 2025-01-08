import express from 'express';
import { addReview, approveReview, deleteReview, getReviews } from '../controllers/reviewController.js';

const reviewRouter = express.Router();//This is the router for the review
reviewRouter.post("/",addReview);//This route is for adding a review
reviewRouter.get("/",getReviews);//This route is for getting the reviews
reviewRouter.delete("/:email",deleteReview);//This route needs the email to delete the review
reviewRouter.put("/approved/:email",approveReview);//This route needs both approved and the email to the update the review

// reviewRouter.get("/approved",
//   (req,res)=>{
//     console.log("This is approved route")//This route needs the approved to get the review
//   }
// );
// reviewRouter.get("/:email",
//   (req,res)=>{
//     console.log("This is email route")//This route needs the email to get the review
//   }
// );

export default reviewRouter;