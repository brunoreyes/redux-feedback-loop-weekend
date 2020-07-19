import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {
  // here is where the user's data is stored after filling out this portion
  // of the form
  state = {
    support: '',
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
    this.props.history.push('/comments');
  }; // end nextClicked

  radio = (event) => {
    console.log('in radio, value:', event.target.value);

    // here I am setting the state's support property = to the user's input
    this.setState({
      support: event.target.value,
    });
  }; //end radio

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label for="1">1</label>
        <input
          onChange={this.radio}
          type="radio"
          id="1"
          name="support"
          value="1"
        ></input>
        <label for="2">2</label>
        <input
          onChange={this.radio}
          type="radio"
          id="2"
          name="support"
          value="2"
        ></input>
        <label for="3">3</label>
        <input
          onChange={this.radio}
          type="radio"
          id="3"
          name="support"
          value="3"
        ></input>
        <label for="4">4</label>
        <input
          onChange={this.radio}
          type="radio"
          id="4"
          name="support"
          value="4"
        ></input>
        <label for="5">5</label>
        <input
          onChange={this.radio}
          type="radio"
          id="5"
          name="support"
          value="5"
        ></input>
        {/* <Link to="/comments"> */}
        <button onClick={this.nextClicked}>NEXT</button>
        {/* </Link> */}
      </div>
    );
  } // end render
} // end class component

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Support);
