import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// this is of course for later but I want to add my bootstrap floating placeholder
// from sql todo list but I 1st have to figure out how to import bootstrap into react
class Comments extends Component {
  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <form class="form-input">
          <div class="form-label-group">
            <input
              type="text"
              id="commentsIn"
              class="form-control"
              placeholder="Comments"
            ></input>
            <label for="commentsIn">Comments</label>
          </div>
        </form>
        <Link to="/reviewfeedback">
          <button>NEXT</button>
        </Link>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Comments);
