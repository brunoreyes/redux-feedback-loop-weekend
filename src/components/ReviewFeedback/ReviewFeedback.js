import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewFeedback extends Component {
  submitClicked = () => {
    axios
      .post('/feedback', this.props.reduxState.feedbackReducer)
      .then((response) => {
        console.log('response:', response);

        // Here I'm changing the type to: RESET_FEEDBACK, returning an empty object
        // and sending up this information to index.js, activating feedbackReducer's
        // else if statement
        this.props.dispatch({ type: 'RESET_FEEDBACK' });
      })
      .catch((error) => {
        alert('Database Error');
        console.log('POST error for feedback', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>

        {/* I need to use reduxState to have access to props
          and let's us get a hold of data within redux's storage */}

        {/* {JSON.stringify(this.props.reduxState.feedbackReducer)} */}
        <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
        <p>
          Understanding: {this.props.reduxState.feedbackReducer.understanding}
        </p>
        <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
        <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
        <Link to="/submissionsuccess">
          <button onClick={this.submitClicked}>Submit</button>
        </Link>
      </div>
    );
  } // end render
} // end class component

// this function down here places the reduxState on props
// we are adding a reduxState on to the component as a prop
const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(ReviewFeedback);
