export const ADD_TODO_ACTION = "ADD_TODO";
export const DELETE_TODO_ACTION = "DELETE_TODO";
export const COMPLETE_TODO_ACTION = "COMPLETE_TODO";

export function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, action.todo];

    case DELETE_TODO_ACTION: {
      const newTodos = state.filter((todo) => todo.id !== action.todo.id);
      const sortedTodos = newTodos.map((todo, index) => {
        return { ...todo, order: index };
      });

      return sortedTodos;
    }

    case COMPLETE_TODO_ACTION: {
      const newTodos = state.map((todo) => {
        return {
          ...todo,
          completed: todo.id === action.todo.id ? !todo.completed : todo.completed,
        };
      });
      return newTodos;
      
    }

    default:
      return state;
  }
}

export const createTodo = (todo) => {
  return {
    type: ADD_TODO_ACTION,
    todo,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO_ACTION,
    todo,
  };
};

export const completeTodo = (todo) => {
  return {
    type: COMPLETE_TODO_ACTION,
    todo,
  };
};
