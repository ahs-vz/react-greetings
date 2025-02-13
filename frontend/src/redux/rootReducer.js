import { combineReducers } from 'redux';
import greetingReducer from './features/greeting/greetingReducer';

const rootReducer = combineReducers({
    greeting: greetingReducer
});

export default rootReducer;