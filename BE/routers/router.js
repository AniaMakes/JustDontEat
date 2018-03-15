const router = require('express').Router();
const {getPlaces,getPlaceDetails, getGeolocation} = require('../api.js')

router.get('/get-geolocation/:placeName', getGeolocation)

router.get('/get-places',getPlaces)
router.get('/get-place-details',getPlaceDetails)
router.get('/',(req,res)=>{
    res.status.sendFile('index.html')
})

module.exports=router;