import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import { fbconfig } from "./firebase/fbConfig";

// react-redux-firebase config
const rrfConfig = {
  // userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

export const rrfProps = {
  firebase: fbconfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const initialState = {};

export const store = createStore(rootReducer, initialState);
