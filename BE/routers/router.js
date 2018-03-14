const router = require('express').Router();
const {getPlaces,getPlaceDetails} = require('../api.js')

router.get('/getPlaces',getPlaces)
router.get('/getPlacesDetails',getPlaceDetails)

module.exports=router;