import {SIGNUP} from '../actions/type';
import {initState} from './initialState';

const reducer = (state = initState, action) => {
    switch(action.type){
        case SIGNUP:
            return ({...state, userData: action.payload});

    }
    return state;
}

export default reducer;
