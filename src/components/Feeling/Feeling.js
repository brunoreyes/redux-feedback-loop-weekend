import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// We do mostly everything besides imports within the class Component
class Feeling extends Component {
  // here is where the user's data is stored after filling out this portion
  // of the form
  state = {
    // support: '3',
    support: '',
  }; // end state

  nextClicked = (event) => {
    console.log('In NEXT clicked');

    // this if statement basically makes sure that if the user didn't select an input
    // they are not allowed to go to the next page and alerted that they must submit info
    if (this.state.support !== ``) {
      // this.props.dispatch uses dispatch to push form data
      //  back to index.js's state array using Redux
      this.props.dispatch({
        type: 'SET_FEEDBACK',
        payload: this.state,
      });

      // this.props.history.path is going to bring
      // the user into the next part of the feedback form (understanding)
      // which is a route listed within App.js's router
      this.props.history.push('/understanding');
    } else {
      alert('To be able to continue please select a number between 1-5.');
    }
  }; // end nextClicked
  radio = (event) => {
    console.log('in radio, value:', event.target.value);

    // this.setState sets the state's feeling property = to the user's input
    this.setState({
      feeling: event.target.value,
    });
  }; //end radio

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label for="1">1</label>
        <input
          onChange={this.radio}
          type="radio"
          id="1"
          name="feeling"
          value="1"
        ></input>
        <label for="2">2</label>
        <input
          onChange={this.radio}
          type="radio"
          id="2"
          name="feeling"
          value="2"
        ></input>
        <label for="3">3</label>
        <input
          onChange={this.radio}
          type="radio"
          id="3"
          name="feeling"
          value="3"
          // defaultChecked
        ></input>
        <label for="4">4</label>
        <input
          onChange={this.radio}
          type="radio"
          id="4"
          name="feeling"
          value="4"
        ></input>
        <label for="5">5</label>
        <input
          onChange={this.radio}
          type="radio"
          id="5"
          name="feeling"
          value="5"
        ></input>
        {/* <Link to="/understanding"> */}
        <button onClick={this.nextClicked}>Next</button>
        {/* </Link> */}
      </div>
    );
  } // end render
} // end class component

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Feeling);
