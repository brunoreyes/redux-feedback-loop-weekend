import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {
  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>
          Feelings:<span></span>
        </p>
        <p>
          Understanding:<span></span>
        </p>
        <p>
          Support:<span></span>
        </p>
        <p>
          Comments:<span></span>
        </p>
        <Link to="/submissionsuccess">
          <button>Submit</button>
        </Link>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(ReviewFeedback);
