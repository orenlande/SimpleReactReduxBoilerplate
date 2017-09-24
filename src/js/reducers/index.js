import { combineReducers } from 'redux';
import  SimpleReducer from './simple_reducer';

const rootReducer = combineReducers({
    simpleGlobalState: SimpleReducer
});

export default rootReducer;
