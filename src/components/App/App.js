import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Feeling from '../Feeling/Feeling.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback.js';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess.js';

//

class App extends Component {
  // getFeedback = () => {
  //   //shorthand axios call
  //   axios.get('/api/feedback')
  //   .then( (response) => {
  //     console.log('Got feedback from server', response.data)
  //     //update reducer
  //     this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data})
  //   })
  //   .catch ( (error)=> {
  //     alert('Could not get feedback. Try again later');
  //     console.log('Error getting feedback', error)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <main>
            <Route exact path="/" component={Feeling} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/support" component={Support} />
            <Route path="/comments" component={Comments} />
            <Route path="/reviewfeedback" component={ReviewFeedback} />
            <Route
              exact
              path="/submissionsuccess"
              component={SubmissionSuccess}
            />
          </main>
          <footer></footer>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(App);
