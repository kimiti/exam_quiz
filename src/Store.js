import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

import { getFirebase } from "react-redux-firebase";

const middlewares = [thunk.withExtraArgument(getFirebase)];

// Create store with reducers and initial state
const initialState = {};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
