import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "../root.reducer";

const middlewares = [logger]; //Array com todos os middlewares que vamos utilizar

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //Cria a store com o root reducer, e passando todos os middlewares

export default store;
