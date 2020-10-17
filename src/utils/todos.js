export function getUnfinishedTodos(todos) {
  let unfinishedTodos = 0;
  todos.forEach((todo) => {
    if (!todo.completed && !todo.deleted) {
      unfinishedTodos++;
    }
  });
  return unfinishedTodos;
}

export function getFinishedTodos(todos) {
  let finishedTodos = 0;
  todos.forEach((todo) => {
    if (todo.completed && !todo.deleted) {
      finishedTodos++;
    }
  });
  return finishedTodos;
}

export function getDeletedTodos(todos) {
  let deletedTodos = 0;
  todos.forEach((todo) => {
    if (todo.deleted) {
      deletedTodos++;
    }
  });
  return deletedTodos;
}

export function getTotalTodos(todos) {
  let totalTodos = 0;
  todos.forEach((todo) => {
    if (!todo.deleted) {
      totalTodos++;
    }
  });
  return totalTodos;
}
