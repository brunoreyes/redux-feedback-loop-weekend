import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {
  handleSubmit = () => {
    // TODO: Clear the cart and navigate to the product page

    this.props.dispatch({
      type: 'SUBMIT',
      // payload: this.props.product,
      // we get rid of payload because we aren't returning anything bc
      // of the else if statement written in the checkout reducer in index.js
    });
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feelings:</p>
        {JSON.stringify(this.props.reduxState.feedbackReducer)}
        {/* we need to use reduxState to have access to props
        and let's us get a hold of data within redux's storage */}


        {/* {this.props.reduxState.feedbackReducer.map((state, i) => {
          return (<span key={i}> {state.feeling}</span>) */}
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
  } // end render
} // end class component

// this function down here places the reduxState on props 
// we are adding a reduxState on to the component as a prop
const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(ReviewFeedback);
