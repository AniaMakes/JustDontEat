const processRestaurantDetails = require("../lib/processRestaurantDetails");

const detailsDummyData = require("./dummyData/restaurantDetails.js");

describe("Process Restaurant Details data coming from the API", function(){

  it("renders the correct format", function(){
    const asAPIDummyData = detailsDummyData.default;
    const input = asAPIDummyData;
    const run = processRestaurantDetails(input);
    const expected = {
      "name": "Google",
      "address": "5, 48 Pirrama Road, Pyrmont NSW 2009, Australia",
      "rating": 4.4,
      "contactDetails": "+61 2 9374 4000",
      "reviews": [
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Danielle Lonnon",
            "author_url" : "https://plus.google.com/118257578392162991040",
            "language" : "en",
            "rating" : 5,
            "text" : "As someone who works in the theatre, I don't find the Google offices nerdy, I find it magical and theatrical. Themed rooms  with useful props and big sets with unique and charismatic characters. You sure this isn't a theatre company? Oh no wait Google has money, while the performing art does not.",
            "time" : 1425790392
         },
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Rob Mulally",
            "author_url" : "https://plus.google.com/100839435712919930388",
            "language" : "en",
            "rating" : 5,
            "text" : "What can I say, what a great building, cool offices and friendly staff!\nonly had a quick tour but there isn't much missing from this world class modern office.\n\nIf your staff who work here I hope you take advantage of all that it offers , because as a visitor it was a very impressive setup. \n\nThe thing that stood out besides the collaborative area's and beds for resting, was the food availability.\n\nImpressed. 5 Stars.\n",
            "time" : 1408284830
         },
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Michael Yeung",
            "author_url" : "https://plus.google.com/104161906493535874402",
            "language" : "en",
            "rating" : 5,
            "text" : "Best company in the world. The view from the cafeteria is unreal, you take in the entire Darling harbour view like nowhere else :)",
            "time" : 1435313350
         },
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Ibrahim El-Jamal",
            "author_url" : "https://plus.google.com/103646390098458637797",
            "language" : "en",
            "rating" : 5,
            "text" : "Great track, great staff, overall great experience!!!!! ",
            "time" : 1434331674
         },
         {
            "aspects" : [
               {
                  "rating" : 3,
                  "type" : "overall"
               }
            ],
            "author_name" : "Marco Palmero",
            "author_url" : "https://plus.google.com/103363668747424636403",
            "language" : "en",
            "rating" : 5,
            "text" : "I've been fortunate enough to have visited the Google offices on multiple occasions through the years and I've found this place to be quite awesome. This particular office is the original campus for Google Sydney and they've expanded to the Fairfax building where they've built an even more exciting office!\n\nTotally jealous of their cafeteria and the city views from their office!",
            "time" : 1413529682
         }
      ]

    }

    expect(run).toEqual(expected);
  })
})
