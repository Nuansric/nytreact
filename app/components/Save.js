// Include React
var React = require("react");


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Main component
var Save = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { result:[]};
      //, headline = "", pubDate="", url="" 
  },
 // This function will respond to the user input
   componentDidMount: function() {
       console.log("inside get save");
    this.getArticles();
  },
getArticles: function() {
       console.log("inside get save");
    // Get the latest history.
    helpers.getSave().then(function(response) {
      console.log(response);
      if (response !== this.state.result) {
        console.log("History", response.data);
        this.setState({ result: response.data });
      }
    }.bind(this));
  },



    handleDelete: function(search) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
  console.log(search);
 //Run the query for the address
    helpers.deleteSave(search.topic).then(function(data) {
            console.log("before second get");
       this.getArticles();
   
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
                     <h3 className="panel-title text-center">Saved Articles</h3>
                </div>
       
                {this.state.result.map(function(search, i) {
                        return (
                            <div>
                            
                             <div key={i} className="panel panel-default">
                              <div  className="panel-body text-center">  
                                <h2>{search.topic}</h2>
                                <p>Publication Date: {search.pubDate}</p>
                                <p>Web URL:</p>
                                <a href="{search.web_url}">{search.url}</a>
                                
                           
                            <button className="btn btn-primary" type="submit" onClick={that.handleDelete.bind(that, search)}>DELETE</button>


                            
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
module.exports = Save;
