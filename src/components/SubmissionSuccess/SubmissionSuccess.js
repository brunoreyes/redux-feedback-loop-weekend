import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class SubmissionSuccess extends Component {
  // Here I am bringing back to the 1st part of the form to fillout new feedback!
  leaveNewFeedbackClicked = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h3>Thank You For Submitting Your Feedback!</h3>
        {/* <Link to="/"> */}
        <br></br>
        <span className="Button">
          <Button
            className="Button"
            variant="contained"
            onClick={this.leaveNewFeedbackClicked}
          >
            Leave New Feedback
          </Button>
        </span>
        {/* </Link> */}
      </div>
    );
  } // end render
} // end class component

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(SubmissionSuccess);
