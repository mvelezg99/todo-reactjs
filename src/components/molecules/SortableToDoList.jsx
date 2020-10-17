// ---------- React imports
import React from "react";
// ---------- Components imports
import TodoItem from "./TodoItem/TodoItem";
import TodoTextItem from "./TodoItem/TodoTextItem";
import List from "@material-ui/core/List";
// ---------- Layout imports
import Divider from "@material-ui/core/Divider";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
// ---------- Styles imports
import { listTheme } from "../../styles/list_style";
import { ThemeProvider } from "@material-ui/core/styles";

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

export default SortableTodoList
