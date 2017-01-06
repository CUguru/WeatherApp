var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h2 className="text-center page-title">Examples!!!!</h2>
      <p>Here are a few example locations to try out.</p>
      <ol>
        <li>
          <Link to='/?location=Lagos'>Lagos, Nigeria</Link>
        </li>
        <li>
          <Link to='/?location=Maui'>Maui, Hawaii</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Examples;
