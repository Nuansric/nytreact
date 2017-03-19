// Include React
var React = require("react");

var Main = React.createClass({

    // Here we render the component
    render: function() {

        return (

 <div className = "container" >
    <div className = "jumbotron" >
        <h1>The New York Times</h1>
            <p>
                <a href = "#/search" className = "btn btn-primary btn-lg" >Start Search</a>
                <a href= "#/save" className = "btn btn-danger btn-lg" > Show Saved Articles</a>
		    </p>

		<div className= "row" > 
                 { this.props.children }
         </div> 
     </div> 
</div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;