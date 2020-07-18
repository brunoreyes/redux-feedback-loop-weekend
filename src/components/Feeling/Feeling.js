import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {
  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label for="1">1</label>
        <input type="radio" id="1" name="feeling" value="1"></input>
        <label for="2">2</label>
        <input type="radio" id="2" name="feeling" value="2"></input>
        <label for="3">3</label>
        <input type="radio" id="3" name="feeling" value="3"></input>
        <label for="4">4</label>
        <input type="radio" id="4" name="feeling" value="4"></input>
        <label for="5">5</label>
        <input type="radio" id="5" name="feeling" value="5"></input>
        <Link to="/understanding">
          <button>NEXT</button>
        </Link>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Feeling);
