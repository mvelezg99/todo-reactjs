import { createStore, combineReducers } from "redux";
//import { usersReducer } from "./reducer";

export const store = createStore(
  combineReducers({
    //users: usersReducer
  })
);
