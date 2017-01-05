var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    // debugger;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
      console.log(errorMessage);
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      // debugger;
      if(isLoading) {
        return <h3 className="text-center">Fetching the weather for you...</h3>;
      } else if (temp != null && location != null) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    debugger;
    return(
      <div>
        <h2 className="text-center">Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
