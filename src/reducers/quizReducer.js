import { GET_QUIZZES, GET_QUIZ_QUESTIONS, GET_QUESTION_ANSWERS, GET_QUIZ_RESULTS } from '../actions/types';

const initialState = {
    quizList: [],
    quizQuestions: [],
    questionAnswers: [],
    results: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_QUIZZES:
            return Object.assign({}, state, {
                quizList: action.payload
            });
        case GET_QUIZ_QUESTIONS:
            return Object.assign({}, state, {
                quizQuestions: action.payload
            });
        case GET_QUESTION_ANSWERS:
            return Object.assign({}, state, {
                questionAnswers: action.payload
            });
        case GET_QUIZ_RESULTS:
            return Object.assign({}, state, {
                results: action.payload
            });
        default:
            return state;
    }
}