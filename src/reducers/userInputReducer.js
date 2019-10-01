import { SET_INITIAL_VALUES, SET_QUESTION_ANSWER, SET_QUIZ_FINISHED } from '../actions/types';

const initialState = {
    name: '',
    quizId: 0,
    quizStarted: false,
    quizFinished: false,
    userAnswers: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_INITIAL_VALUES:
            return Object.assign({}, state, {
                name: action.payload.name,
                quizId: action.payload.quizId,
                quizStarted: true
            });
        case SET_QUESTION_ANSWER:
            return Object.assign({}, state, {
                userAnswers: [...state.userAnswers, action.payload]
            });
        case SET_QUIZ_FINISHED:
            return Object.assign({}, state, {
                quizFinished: true
            });
        default:
            return state;
    }
}