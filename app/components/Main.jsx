var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div className="main-container">
          {props.children}
        </div>
      </div>

    </div>

  );
};
module.exports = Main;
