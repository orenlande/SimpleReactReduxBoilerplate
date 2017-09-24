import { SIMPLE_ACTION } from '../actions';

export default function(state = {}, action){
    switch (action.type){
        case SIMPLE_ACTION:
            console.log("DISPATCHED TO REDUCER! " + action.payload)
            return action.payload;
        default:
            return "default global string";
    }
}