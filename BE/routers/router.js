const router = require('express').Router();
const {getPlaces,getPlaceDetails} = require('../api.js')

router.get('/get-places',getPlaces)
router.get('/get-places-details',getPlaceDetails)

module.exports=router;