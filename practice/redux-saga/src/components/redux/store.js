import rootReducer from "./Reducer/Reducer";
import { checkCount } from "./saga";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddlware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducer,
   composeEnhancer(applyMiddleware(sagaMiddlware))
);
sagaMiddlware.run(checkCount);
export default store;
