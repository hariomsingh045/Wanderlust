// Correct version
const Listing = require("../models/listing"); 
const Review = require("../models/review");


module.exports.reviewRoute=async(req,res)=>{
let listing =await Listing.findById(req.params.id);
let newReview=new Review(req.body.review);
newReview.author=req.user._id;
listing.reviews.push(newReview);
// console.log(newReview);
await newReview.save();
await listing.save();
console.log("new review saved")
  req.flash("success","Review Created!")
 res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReviewRoute=async (req,res)=>{
let {id,reviewId}=req.params;
console.log("Deleting review:", reviewId, "for listing:", id);


await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
await Review.findByIdAndDelete(reviewId);
// console.log("Listing updated:", listing);
//   console.log("Review deleted:", review);
  req.flash("success","Review Deleted!")
  return res.redirect(`/listings/${req.params.id}`);
}