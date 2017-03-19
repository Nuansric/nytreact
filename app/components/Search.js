// Include React
var React = require("react");


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Main component
var Search = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { topic: "Search Topic", startYear: 0, endYear: 0, result:[]};
      //, headline = "", pubDate="", url="" 
  },
 // This function will respond to the user input
  handleTopicChange: function(event) {

    this.setState({ 
        topic: event.target.value
        
 });
  },
  // This function will respond to the user input
  handleStartYearChange: function(event) {

    this.setState({ 
        startYear: event.target.value
        
 });

  },
   handleEndYearChange: function(event) {

    this.setState({ 
        endYear: event.target.value
        
 });

  },
handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Run the query for the address
    helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
       
        console.log("Address", data);

        this.setState({ result: data });

      }
    }.bind(this));


    this.setState({ topic: "", startYear: "", endYear: ""});
  },
    
handleSave: function(search) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
  console.log(search);
// Run the query for the address
    helpers.postSave(search.headline.main, search.pub_date, search.web_url).then(function(data) {
     console.log("UPDATED")
    }.bind(this));


   
  },

  // Here we render the function
  render: function() {
       var that = this;
    return (
    <div>
     <div className="row">
        <div className="jumbotron">
          <div className="col-md-12">
             <div className="panel panel-default">
                <div className="panel-heading">
                     <h3 className="panel-title text-center">Query</h3>
                </div>
       
                 <div className="panel-body text-center">
                     <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                             <h4 className="">
                                <strong>Location</strong>
                             </h4>
                                <label>Topic:</label>
                                <input
                                    value={this.state.topic}
                                    type="text"
                                    className="form-control text-center"
                                    id="topic"
                                    onChange={this.handleTopicChange}
                                    required
                                />
                                 <label>Start Year:</label>
                                <input
                                    value={this.state.startYear}
                                    type="text"
                                    className="form-control text-center"
                                    id="startYear"
                                    onChange={this.handleStartYearChange}
                                    required
                                />
                                 <label>End Year:</label>
                                <input
                                    value={this.state.endYear}
                                    type="text"
                                    className="form-control text-center"
                                    id="endYear"
                                    onChange={this.handleEndYearChange}
                                    required
                                />
                                 <br />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                     </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="jumbotron">
          <div className="col-md-12">
             <div className="panel panel-default">
                <div className="panel-heading">
                     <h3 className="panel-title text-center">Article Found</h3>
                </div>
       
                {this.state.result.map(function(search, i) {
                        return (
                            <div>
                            
                             <div key={i} className="panel panel-default">
                              <div  className="panel-body text-center">  
                                <h2>{search.headline.main}</h2>
                                <p>Publication Date: {search.pub_date}</p>
                                <p>Web URL:</p>
                                <a href="{search.web_url}">{search.web_url}</a>
                                
                           
                            <button className="btn btn-primary" type="submit" onClick={that.handleSave.bind(that, search)}>SAVE</button>


                            
                            </div>
                            
                            
                            </div>
                            </div>
                        );
                })}
                 
                </div>
            </div>
        </div>
    </div>
          
   </div>        
  
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
