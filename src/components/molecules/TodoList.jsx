// ---------- React imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ---------- Components imports
import TodoFilter from "./TodoFilter";
import TodoOrder from "./TodoOrder";
import TodoItem from "./TodoItem";
import TodoTextItem from "./TodoTextItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
// ---------- Utils imports
import { FILTER_OPTIONS } from "../../utils/filterOptions";
import arrayMove from "array-move";
import { moveTodo } from "../../redux_store/todosReducer";
import { getTotalTodos } from "../../utils/todos";
// ---------- Styles imports
import { listTheme } from "../../styles/list_style";
import { filterTheme } from "../../styles/filter_styles";
import { useFilterStyles } from "../../styles/filter_styles";
import { ThemeProvider } from "@material-ui/core/styles";

// ---------- Images imports

const SortableItem = SortableElement(({ value }) => <TodoItem todo={value} />);

const SortableTodoList = SortableContainer(({ todos, isFiltering }) => {
  return (
    <ThemeProvider theme={listTheme}>
      <List component="nav">
        {todos.map((todo, index) => (
          <div key={todo.id}>
            {!isFiltering && !todo.deleted && (
              <SortableItem index={index} value={todo} />
            )}
            {isFiltering && <TodoTextItem todo={todo} />}
            <Divider />
          </div>
        ))}
      </List>
    </ThemeProvider>
  );
});

const TodoList = () => {
  const filterClasses = useFilterStyles();

  const todos = useSelector((state) => state.todos);
  const isEditing = useSelector((state) => state.app.isEditing);
  const dispatch = useDispatch();

  const [todosFiltered, setTodosFiltered] = useState([]);
  const [filterOption, setFilterOption] = useState(FILTER_OPTIONS.all);
  const [search, setSearch] = useState("");

  const filteredTodos = todos
    .filter((todo) => {
      if (filterOption === FILTER_OPTIONS.all) return !todo.deleted;
      else if (filterOption === FILTER_OPTIONS.deleted) return todo.deleted;
      else if (filterOption === FILTER_OPTIONS.unfinished)
        return !todo.completed && !todo.deleted;
      else if (filterOption === FILTER_OPTIONS.finished)
        return todo.completed && !todo.deleted;
      else return false;
    })
    .filter((todo) => {
      const isSearching = search.length >= 3;
      if (!isSearching) return true;
      return todo.name.toLowerCase().includes(search.toLowerCase());
    });

  const isSearch = search.length >= 3;
  const isFilter = filterOption !== FILTER_OPTIONS.all;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(moveTodo(arrayMove(todos, oldIndex, newIndex)));
  };

  return (
    <ThemeProvider theme={filterTheme}>
      <Grid container className={filterClasses.filter_div}>
        {getTotalTodos(todos) > 0 && !isEditing && (
          <Paper className={filterClasses.paper}>
            <TodoFilter
              setSearch={setSearch}
              setFilterOption={setFilterOption}
              search={search}
              filterOption={filterOption}
            />
            {!isFilter && !isSearch && <TodoOrder />}
          </Paper>
        )}
      </Grid>
      <br />

      <Divider />

      <SortableTodoList
        distance={1}
        todos={filteredTodos}
        onSortEnd={onSortEnd}
        isFiltering={isFilter || isSearch}
      />
    </ThemeProvider>
  );
};

export default TodoList;
