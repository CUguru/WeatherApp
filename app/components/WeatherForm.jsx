var React = require('react');
var Weather = require('Weather');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

    // setTimeout(function(){window.location.href = 'Weather';}, 2000);
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type='text' ref="location" placeholder="Enter City"/>
          </div>
          <div>
            <button className="submit-button columns large-4">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = WeatherForm;
