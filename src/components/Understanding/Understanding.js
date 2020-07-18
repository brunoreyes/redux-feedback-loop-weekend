import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {
  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label for="1">1</label>
        <input type="radio" id="1" name="understanding" value="1"></input>
        <label for="2">2</label>
        <input type="radio" id="2" name="understanding" value="2"></input>
        <label for="3">3</label>
        <input type="radio" id="3" name="understanding" value="3"></input>
        <label for="4">4</label>
        <input type="radio" id="4" name="understanding" value="4"></input>
        <label for="5">5</label>
        <input type="radio" id="5" name="understanding" value="5"></input>
        <Link to="/support">
          <button>NEXT</button>
        </Link>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Understanding);
