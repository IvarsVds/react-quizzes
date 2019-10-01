import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Question.css';
import {
    Button,
    Progress
} from 'reactstrap';
import Loading from '../Loading/Loading';
import { getQuestionAnswers, getResults } from '../../actions'
import { SET_QUESTION_ANSWER, SET_QUIZ_FINISHED } from '../../actions/types';


class Question extends Component {
    componentDidUpdate() {
        const questionsAnswered = this.props.userAnswers.length;
        const questionsTotal = this.props.quizQuestions.length;
        const quizId = this.props.quizId;

        if (questionsAnswered < questionsTotal) {
            this.props.getQuestionAnswers(
                quizId,
                // using questionsAnswered as array index
                this.props.quizQuestions[questionsAnswered].id
                );
        } else {
            this.props.setQuizFinished();
            this.props.getResults(quizId, this.props.userAnswers);
        }
    }

    render() {
        const progressValue = () => this.props.userAnswers.length * 100 / this.props.quizQuestions.length;
        
        const questionsTotal = this.props.quizQuestions.length;
        const questionAnswersTotal = this.props.questionAnswers.length;
        const questionsAnswered = this.props.userAnswers.length;

        if (questionsTotal === 0 && questionAnswersTotal === 0) {
            return (
                <div>
                    <Loading />
                </div>
            );
        } else if (questionsTotal > 0 && questionsAnswered < questionsTotal) {
            return (
                <div>
                    <div className="px-4 py-4">
                        <h1>
                            {this.props.quizQuestions[this.props.userAnswers.length].title}
                        </h1>
                    </div>
                    <div className="questionBox">
                        {this.props.questionAnswers.map(q => (
                            <Button
                                outline
                                color="success"
                                className="outline-buttons"
                                onClick={() => this.props.setQuestionAnswer(q.id)}
                                block
                                key={q.id}
                            >{q.title}</Button>
                        ))}
                    </div>
                    <div className="px-4 py-4">
                        <Progress color="success" value={progressValue()} />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Calculating your results...
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    quizId: state.user.quizId,
    userAnswers: state.user.userAnswers,
    quizQuestions: state.quiz.quizQuestions,
    questionAnswers: state.quiz.questionAnswers
});

const mapDispatchToProps = dispatch => ({
    getQuestionAnswers: (quizId, questionId) => dispatch(getQuestionAnswers(quizId, questionId)),
    setQuestionAnswer: (answerId) => dispatch({
        type: SET_QUESTION_ANSWER,
        payload: answerId
    }),
    setQuizFinished: () => dispatch({
        type: SET_QUIZ_FINISHED
    }),
    getResults: (quizId, userAnswers) => dispatch(getResults(quizId, userAnswers))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);