import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubmissionSuccess extends Component {
  
  // Here I am bringing back to the 1st part of the form to fillout new feedback!
  leaveNewFeedbackClicked = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Thank You For Submitting Your Feedback!</h2>
        {/* <Link to="/"> */}
        <button onClick={this.leaveNewFeedbackClicked}>
          Leave New Feedback
        </button>
        {/* </Link> */}
      </div>
    );
  } // end render
} // end class component

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(SubmissionSuccess);
