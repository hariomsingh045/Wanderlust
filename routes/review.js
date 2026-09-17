const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const {listingSchema}=require("../schema.js")
const {reviewSchema}=require("../schema.js")
const Review =require("../models/review.js");
const Listing = require("../models/listing.js");
const { required } = require("joi");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js")

const listingController=require("../controllers/review.js");


//reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(listingController.reviewRoute));


//Delete Reviews
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(listingController.deleteReviewRoute));

module.exports=router;