export const ADD_TODO_ACTION = "ADD_TODO";

export function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, action.todo];

    default:
      return state;
  }
}

export const createTodo = (todo) => {
  return {
    type: ADD_TODO_ACTION,
    todo
  }
}
