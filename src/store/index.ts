import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducers from "@src/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [
  thunkMiddleware // lets us dispatch() functions
];

// 创建store
export default createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares)
));
