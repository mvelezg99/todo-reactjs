export const ADD_TODO_ACTION = "ADD_TODO";
export const UPDATE_TODO_ACTION = "UPDATE_TODO";
export const DELETE_TODO_ACTION = "DELETE_TODO";
export const COMPLETE_TODO_ACTION = "COMPLETE_TODO";

export const MOVE_TODO_ACTION = "MOVE_TODO";

export const ORDER_TODOS_ASC_ACTION = "ORDER_TODOS_ASC";
export const ORDER_TODOS_DESC_ACTION = "ORDER_TODOS_DESC";
export const ORDER_TODOS_FIN_ACTION = "ORDER_TODOS_FIN";
export const ORDER_TODOS_UNF_ACTION = "ORDER_TODOS_UNF";

export function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO_ACTION: {
      const newTodos = [...state, action.todo];
      return newTodos;
    }

    case UPDATE_TODO_ACTION: {
      const newTodos = state.map((todo) => {
        return {
          ...todo,
          name: todo.id === action.todo.id ? action.todo.name : todo.name,
        };
      });
      return newTodos;
    }

    case DELETE_TODO_ACTION: {
      const newTodos = state.map((todo) => {
        return {
          ...todo,
          deleted: todo.id === action.todo.id ? true : todo.deleted,
          order: todo.id === action.todo.id ? 0 : todo.order,
        };
      });

      return newTodos;
    }

    case COMPLETE_TODO_ACTION: {
      const newTodos = state.map((todo) => {
        return {
          ...todo,
          completed:
            todo.id === action.todo.id ? !todo.completed : todo.completed,
        };
      });
      return newTodos;
    }

    case MOVE_TODO_ACTION: {
      return action.todos;
    }

    case ORDER_TODOS_ASC_ACTION: {
      const newTodos = [...state].sort((todoA, todoB) =>
        todoA.name.toLowerCase().localeCompare(todoB.name.toLowerCase())
      );
      return newTodos;
    }

    case ORDER_TODOS_DESC_ACTION: {
      const newTodos = [...state].sort((todoA, todoB) =>
        todoB.name.toLowerCase().localeCompare(todoA.name.toLowerCase())
      );
      return newTodos;
    }

    case ORDER_TODOS_FIN_ACTION: {
      const newTodos = [...state].sort((todoA, todoB) => {
        if (todoA.completed && !todoB.completed) {
          return -1;
        } else if (!todoA.completed && todoB.completed) {
          return 1;
        } else {
          return 0;
        }
      });
      return newTodos;
    }

    case ORDER_TODOS_UNF_ACTION: {
      const newTodos = [...state].sort((todoA, todoB) => {
        if (todoA.completed && !todoB.completed) {
          return 1;
        } else if (!todoA.completed && todoB.completed) {
          return -1;
        } else {
          return 0;
        }
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

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO_ACTION,
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

export const moveTodo = (todos) => {
  return {
    type: MOVE_TODO_ACTION,
    todos,
  };
};

export const orderTodosAsc = (todos) => {
  return {
    type: ORDER_TODOS_ASC_ACTION,
    todos,
  };
};

export const orderTodosDesc = (todos) => {
  return {
    type: ORDER_TODOS_DESC_ACTION,
    todos,
  };
};

export const orderTodosFin = (todos) => {
  return {
    type: ORDER_TODOS_FIN_ACTION,
    todos,
  };
};

export const orderTodosUnf = (todos) => {
  return {
    type: ORDER_TODOS_UNF_ACTION,
    todos,
  };
};
