import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Homepage from '../Homepage/Homepage';
import Question from '../Question/Question';
import Results from '../Results/Results';

function App(props) {
  return (
      <div className="container">
        <div className="mainFrame">
          {!props.quizStarted && <Homepage />}
          {props.quizStarted && !props.quizFinished && <Question />}
          {props.quizFinished && <Results />}
        </div>
      </div>

  );
}

const mapStateToProps = state => ({
  quizStarted: state.user.quizStarted,
  quizFinished: state.user.quizFinished
});

export default connect(mapStateToProps, null)(App);