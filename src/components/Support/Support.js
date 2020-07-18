import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {
  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label for="1">1</label>
        <input type="radio" id="1" name="support" value="1"></input>
        <label for="2">2</label>
        <input type="radio" id="2" name="support" value="2"></input>
        <label for="3">3</label>
        <input type="radio" id="3" name="support" value="3"></input>
        <label for="4">4</label>
        <input type="radio" id="4" name="support" value="4"></input>
        <label for="5">5</label>
        <input type="radio" id="5" name="support" value="5"></input>
        <Link to="/comments">
          <button>NEXT</button>
        </Link>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Support);
