import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";

// react-redux-firebase config
const rrfConfig = {
  // userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const initialState = {};

export const store = createStore(rootReducer, initialState);
