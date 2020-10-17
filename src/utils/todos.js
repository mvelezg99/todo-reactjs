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

export function filterFinishedTodos(todos) {
  const filteredTodos = todos.filter((todo) => todo.completed && !todo.deleted);
  return filteredTodos;
}

export function filterUnfinishedTodos(todos) {
  const filteredTodos = todos.filter(
    (todo) => !todo.completed && !todo.deleted
  );
  return filteredTodos;
}

export function filterDeletedTodos(todos) {
  const filteredTodos = todos.filter((todo) => todo.deleted);
  return filteredTodos;
}

export function filterSearchTodos(todos, search) {
  const todosFiltered = todos.filter(
    (todo) =>
      todo.name.toLowerCase().includes(search.toLowerCase()) && !todo.deleted
  );
  return todosFiltered;
}

export function filterSearchDeletedTodos(todos, search) {
  const todosFiltered = todos.filter(
    (todo) =>
      todo.name.toLowerCase().includes(search.toLowerCase()) && todo.deleted
  );
  return todosFiltered;
}
