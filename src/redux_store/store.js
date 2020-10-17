import { createStore, combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { appReducer } from "./appReducer"

export const store = createStore(
  combineReducers({
    todos: todosReducer,
    app: appReducer
  })
);
