import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Results.css';


class Results extends Component {
    render() {
        return(
            <div>
                <div className="px-4 py-4">
                    <h1>Congratulations, <strong>{this.props.name}</strong>!</h1>
                </div>
                <div>
                    <h2>Your results is</h2>
                    <span className="correct">{this.props.results.correct}</span>
                    <span className="total">/{this.props.results.total}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.user.name,
    results: state.quiz.results
});

export default connect(mapStateToProps, null)(Results);