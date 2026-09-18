const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js")
const Listing = require("../models/listing.js");
const {validateListing,isLoggedIn,isOwner}=require("../middleware.js")
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController=require("../controllers/listing.js");

router
.route("/")
.get( wrapAsync(listingController.indexRoute))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.createRoute))

//New Route
router.get("/new", isLoggedIn, wrapAsync(listingController.newRoute));

router
.route("/:id")
.get(wrapAsync(listingController.showRoute))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateRoute))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyRoute))


//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editRoute));


module.exports=router;