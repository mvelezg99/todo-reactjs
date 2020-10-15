import { createStore, combineReducers } from "redux";
import { todosReducer } from "./todosReducer";

export const store = createStore(
  combineReducers({
    todos: todosReducer
  })
);
