const processReastaurantSearch = require("../lib/processRestaurantSearch");

const searchDummyData = require("./dummyData/restaurantSearch.js");

describe("Process Restaurant Search data coming from the API", function(){

  it("renders the correct format", function(){
    const asAPIDummyData = searchDummyData.default;
    const input = asAPIDummyData;
    const run = processReastaurantSearch(input);
    const APIkey = "ourAPIkey"
    const photoRef = "CmRaAAAAPavOzjR1s6MrHgNZSgI19HR2T0ULqWjY-H-r1zpVBx2-kj3sUttosD7lbB-8bN3QUgviz2phsa1eQ_sO9_bTnfxHT8YKTBGMPV6MENG87jfTDbgLeJ_I9hXVwqv0kysiEhBP48Qhmxto-kiPESJG8rrnGhTYDgyi3Y0jStIZ5jPEz1p-Lk3ugg"
    const expected = {
      "location" : {
         "lat" : -33.8712997,
         "lng" : 151.1990326
      },
      "name" : "Dragon Boat Chinese Restaurant",
      "place_id" : "ChIJsfCA-DmuEmsRM1QTsmdL1Uo",
      "rating" : 2.8,
      "photoURL" : `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=${APIkey}`
    };

    expect(run[0].toEqual(expected));

  })


})
