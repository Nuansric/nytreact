// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var SavedSchema = new Schema({
   topic: {
        type: String
    },
    pubDate: {
        type: String
        
    },
    url:{
        type: String
    }
});

// Create the Model
var Saved = mongoose.model("Saved", SavedSchema);

// Export it for use elsewhere
module.exports = Saved;