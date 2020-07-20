import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// this is of course for later but I want to add my bootstrap floating placeholder
// from sql todo list but I 1st have to figure out how to import bootstrap into react
class Comments extends Component {
  // here is where the user's data is stored after filling out this portion
  // of the form
  state = {
    comments: '',
  }; // end state

  previousClicked = () => {
    console.log('in Previous clicked');
    this.props.history.push('/support');
  };

  nextClicked = (event) => {
    console.log('In NEXT clicked');

    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state,
    });

    // this.props.history.path is going to bring
    // the user into the next part of the feedback form (understanding)
    // which is a route listed within App.js's router
    this.props.history.push('/reviewfeedback');
  }; // end nextClicked

  textInput = (event) => {
    console.log('in textInput, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      comments: event.target.value,
    });
  }; //end radio

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <form>
          <div>
            <input
              onChange={this.textInput}
              type="text"
              id="commentsIn"
              placeholder="Comments"
            ></input>
            <label for="commentsIn">Comments</label>
          </div>
        </form>
        {/* <Link to="/reviewfeedback"> */}
        <button onClick={this.previousClicked}>Previous</button>
        <button onClick={this.nextClicked}>Next</button>
        {/* </Link> */}
      </div>
    );
  } // end render
} // end class component

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Comments);
