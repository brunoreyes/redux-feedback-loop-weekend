import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubmissionSuccess extends Component {
  render() {
    return (
      <div>
        <h2>Thank You For Submitting Your Feedback!</h2>
        <Link to="/">
          <button>Leave New Feedback</button>
        </Link>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(SubmissionSuccess);
