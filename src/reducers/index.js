import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import userInputReducer from './userInputReducer';

export default combineReducers({
    quiz: quizReducer,
    user: userInputReducer
});