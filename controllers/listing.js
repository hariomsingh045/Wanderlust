const Listing=require("../models/listing");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");


module.exports.indexRoute=async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.newRoute=async (req, res) => {
 res.render("listings/new.ejs", {
    listing: {
      image: {
        url: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        filename: ""
      }
    }
  });
}

module.exports.showRoute=async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
  
  if(!listing){
     req.flash("error","Listing you requested for does not exist!");
     res.redirect("/listings");
  }
  console.log(listing)
  res.render("listings/show.ejs", { listing });
}

module.exports.createRoute=async (req, res, next) => {
  let result=listingSchema.validate(req.body);
  console.log(result);
  // if(result.error){
  //   throw new ExpressError(400,result.error)
  // }
if (!req.body.listing.image) {
  req.body.listing.image = { url: "", filename: "" };
}
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
 
  await newListing.save();
  req.flash("success","New Listing Created!")
  res.redirect("/listings");
}

module.exports.editRoute=async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
   if(!listing){
     req.flash("error","Listing you requested for does not exist!");
     res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
}

module.exports.updateRoute=async (req, res) => {
  let { id } = req.params;

// Ensure image object
    if (!req.body.listing.image.filename) {
      req.body.listing.image.filename = "unknown";
    }
    if (!req.body.listing.image.url) {
      req.body.listing.image.url = "";
    }

  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Updated!")
  res.redirect(`/listings/${id}`);
}

module.exports.destroyRoute=async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","Listing Deleted!")
  res.redirect("/listings");
};

