// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions (in this case the only one is runQuery)
var helpers = {

    runQuery: function(topic, startYear, endYear) {

        console.log(location);

        // Figure out the geolocation
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101";

        return axios.get(queryURL).then(function(response) {

            console.log(response);
            return response.data.response.docs;
        });
    },
    // This function posts new searches to our database.
  postSave: function(topic, pubDate, url) {
    return axios.post("/api/saved", { 
        topic: topic,
        pubDate: pubDate,
        url: url
     });
  },
getSave: function() {
    return axios.get("/api/saved");
  },
deleteSave: function(topic) {
    console.log(topic);
    return axios.post("/api/saved/delete", { 
        topic: topic
       
     });
  }
};

// We export the helpers object (which contains runQuery)
module.exports = helpers;