var React = require('react');

var About = (props) => {
  return (
    <div>
      <h2 className="page-title">About!!</h2>
      <p>WeatherFetch is handly tool built with React that gives you the weater of anywhere in the world</p>
      <p>Here is the link to my portfolio</p>
      <ul className="about-links">
        <li>
          <a href="http://chibuzouguru.com/">Chibuzo Uguru</a> This is my website
        </li>
        <li>
          <a href="https://facebook.github.io/react/">React</a> This is the React website

        </li>
      </ul>
    </div>
  )
};

module.exports = About;
