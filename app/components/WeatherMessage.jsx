var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <h3 className="displayed-message">It is {temp} degrees Celcius in {location}</h3>
  );
};


module.exports = WeatherMessage;
