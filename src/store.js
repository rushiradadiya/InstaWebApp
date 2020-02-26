import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers/index';
import { initState } from './reducers/initialState';

const composeEnhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let enhancer = composeEnhancer(applyMiddleware(thunk));

export default createStore(reducer, initState, enhancer)
