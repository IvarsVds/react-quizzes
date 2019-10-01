import axios from 'axios';
import {
    GET_QUIZZES,
    GET_QUIZ_QUESTIONS,
    GET_QUESTION_ANSWERS,
    GET_QUIZ_RESULTS
} from './types';

export function getQuizzes() {
    return function(dispatch) {
        return axios.get(`${process.env.REACT_APP_API_URL}?action=quizzes`)
            .then(res => {
                dispatch({
                    type: GET_QUIZZES,
                    payload: res.data
                });
            })
            .catch(e => {
                console.error(e);
            });
    }
}

export function getQuizQuestions(quizId) {
    return function(dispatch) {
        return axios.get(`${process.env.REACT_APP_API_URL}?action=questions&quizId=${quizId}`)
            .then(res => {
                dispatch({
                    type: GET_QUIZ_QUESTIONS,
                    payload: res.data
                });
            })
            .catch(e => {
                console.error(e);
            });
    }
}

export function getQuestionAnswers(quizId, questionId) {
    return function(dispatch) {
        return axios.get(`${process.env.REACT_APP_API_URL}?action=answers&quizId=${quizId}&questionId=${questionId}`)
            .then(res => {
                dispatch({
                    type: GET_QUESTION_ANSWERS,
                    payload: res.data
                });
            })
            .catch(e => {
                console.error(e);
            });
    }
}

export function getResults(quizId, userAnswers) {
    return function(dispatch) {
        const answers = () => userAnswers.map(a => `&answers[]=${a}`).join('');

        return axios.get(`${process.env.REACT_APP_API_URL}?action=submit&quizId=${quizId}${answers()}`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_QUIZ_RESULTS,
                    payload: res.data
                });
            })
            .catch(e => {
                console.error(e);
            });
    }
}