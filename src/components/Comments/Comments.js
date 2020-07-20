import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        <h3>Any comments you want to leave?</h3>
        <form>
          <div>
            <TextField
              id="filled-basic"
              onChange={this.textInput}
              label="Comment"
              variant="filled"
            />
          </div>
        </form>
        {/* <Link to="/reviewfeedback"> */}
        <br></br>
        <span className="Button">
          <Button variant="contained" onClick={this.previousClicked}>
            Previous
          </Button>
        </span>
        <span className="Button">
          <Button variant="contained" onClick={this.nextClicked}>
            Next
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

export default connect(putReduxStateOnProps)(Comments);
