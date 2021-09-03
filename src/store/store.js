import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {LoginReducer} from '../reducers/reducerLogin'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: LoginReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)