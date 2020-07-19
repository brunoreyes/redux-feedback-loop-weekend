import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {
  // here is where the user's data is stored after filling out this portion
  // of the form
  state = {
    understanding: '',
  }; // end state

  nextClicked = (event) => {
    console.log('In NEXT clicked');

    // this.props.dispatch uses dispatch to push form data
    //  back to index.js's state array using Redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state,
    });

    // this.props.history.path is going to bring
    // the user into the next part of the feedback form (understanding)
    // which is a route listed within App.js's router
    this.props.history.push('/support');
  }; // end nextClicked

  radio = (event) => {
    console.log('in radio, value:', event.target.value);

    // this.setState sets the state's understanding property = to the user's input
    this.setState({
      understanding: event.target.value,
    });
  }; //end radio

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label for="1">1</label>
        <input
          onChange={this.radio}
          type="radio"
          id="1"
          name="understanding"
          value="1"
        ></input>
        <label for="2">2</label>
        <input
          onChange={this.radio}
          type="radio"
          id="2"
          name="understanding"
          value="2"
        ></input>
        <label for="3">3</label>
        <input
          onChange={this.radio}
          type="radio"
          id="3"
          name="understanding"
          value="3"
        ></input>
        <label for="4">4</label>
        <input
          onChange={this.radio}
          type="radio"
          id="4"
          name="understanding"
          value="4"
        ></input>
        <label for="5">5</label>
        <input
          onChange={this.radio}
          type="radio"
          id="5"
          name="understanding"
          value="5"
        ></input>
        {/* <Link to="/support"> */}
        <button onClick={this.nextClicked}>Next</button>
        {/* </Link> */}
      </div>
    );
  } // end render
} // end class component

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Understanding);
