import Review from "../models/review.js";

//add a review
export function addReview(req,res){
  if (req.user == null){
    res.status(401).json({
      message: "You must be logged in to add a review"
    });
    return;
  }

  const data = req.body;

  data.name = req.user.firstName + " " + req.user.lastName;
  data.profilePicture = req.user.profilePicture;
  data.email = req.user.email;

  const newReview = new Review(data);

  newReview.save().then(()=>{
    res.json({message: "Review added successfully"});
  }).catch((error)=>{
    res.status(500).json({error: "Review could not be added"});
  })
}

//get the reviews
export async function getReviews(req,res){

  const user = req.user;

  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({error: "Reviews could not be retrieved"});
  }

  //   Review.find().then(
  //     (reviews)=>{
    //     res.json(reviews);
    //   })
  // }
}

//delete the review
export function deleteReview(req,res){

  const email = req.params.email; //This will check whether the email is in the database that created the review and in the URL are the same

  if(user == null){
    res.status(401).json({
      message: "Please login and try again"
    });
    return;
  }
  
  if(req.user.role == "admin"){
    Review.deleteOne
    ({email:email}).then(()=>{
      res.json({message: "Review deleted successfully"});
    }).catch((error)=>{
      res.status(500).json({error: "Review could not be deleted"});
    });

    return;
  }

  if(req.user.role == "customer"){

    if(req.user.email == email){ //This will check whether the user's email and the email in the URL are the same
      Review.deleteOne
      ({email:email}).then(()=>{
        res.json({message: "Review deleted successfully"});
      }).catch((error)=>{
        res.status(500).json({error: "Review could not be deleted"});
      });
    } else {
      res.status(401).json({
        message: "You are not authorized to perform this action"
      });
    }
  }

}

export function approveReview(req,res){
  const email = req.params.email;

  if(req.user == null){
    res.status(401).json({
      message: "Please login and try again"
    });
    return;
  }

  if(req.user.role == "admin"){
    Review.updateOne(
      {
        email:email,
      },
      {
        isApproved:true,
      }
    ).then(()=>{
      res.json({message: "Review approved successfully"});
    }).catch((error)=>{
      res.status(500).json({error: "Review could not be approved"});
    });
  } else {
    res.status(401).json({
      message: "You are not an admin, only admins can approve reviews"
    });
  }
}