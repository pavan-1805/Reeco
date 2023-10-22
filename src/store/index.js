import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../redux/reducers/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
