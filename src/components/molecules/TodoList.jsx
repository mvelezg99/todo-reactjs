// ---------- React imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ---------- Components imports
import TodoItem from "./TodoItem";

import List from "@material-ui/core/List";

// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

// ---------- Utils imports
import arrayMove from 'array-move';
import { moveTodo } from "../../redux_store/todosReducer";

// ---------- Styles imports
import { listTheme } from "../../styles/list_style";
import { ThemeProvider } from "@material-ui/core/styles";
// ---------- Images imports


const SortableItem = SortableElement(({ value }) => <TodoItem todo={value}/>)

const SortableTodoList = SortableContainer(({ todos }) => {

  return (
    <ThemeProvider theme={listTheme}>
      <List component="nav">
        {todos.map(
          (todo, index) =>
            !todo.deleted && (
              <div key={todo.id}>
                <SortableItem index={index} value={todo} />
                <Divider />
              </div>
            )
        )}
      </List>
    </ThemeProvider>
  );
});

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(moveTodo(arrayMove(todos, oldIndex, newIndex)))
  }

  return (
    <SortableTodoList distance={1} todos={todos} onSortEnd={onSortEnd} />
  )

}

export default TodoList;
