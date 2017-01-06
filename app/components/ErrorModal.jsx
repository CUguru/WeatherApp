var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
      <div id="error-modal">
        <h5>Some Title</h5>
        <p>The error message</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});
module.exports = ErrorModal;

// remember to add in code for the modal once the styling for the rest of the app is finished
