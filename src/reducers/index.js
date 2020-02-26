import {ADD_INGREDIENT,REMOVE_INGREDIENT} from '../actions/type';

const initialState = {
    ingredients: null,
    totalPrice: 0.0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case action.ADD_INGREDIENT:
            return {

            }
        case action.REMOVE_INGREDIENT:
            return {

            }
    }

    return state;
}

export default reducer;
