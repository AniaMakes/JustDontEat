const router = require('express').Router();
const {getPlaces,getPlaceDetails, getPhoto, getGeolocation} = require('../api.js')

router.get('/getPlaces',getPlaces)
router.get('/getPlacesDetails',getPlaceDetails)
router.get('/get-photo', getPhoto)
router.get('/get-geolocation/:placeName', getGeolocation)

module.exports=router;