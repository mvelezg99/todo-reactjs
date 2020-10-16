// ---------- React imports
import React from "react";
import { useSelector } from "react-redux";
// ---------- Components imports
import TodoItem from "./TodoItem";

import List from "@material-ui/core/List";

// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

// ---------- Styles imports
import { listTheme } from "../../styles/list_style";
import { ThemeProvider } from "@material-ui/core/styles";
// ---------- Images imports

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ThemeProvider theme={listTheme}>
      <List component="nav">
        {todos.map(
          (todo) =>
            !todo.deleted && (
              <div key={todo.id}>
                <TodoItem todo={todo} />
                <Divider />
              </div>
            )
        )}
      </List>
    </ThemeProvider>
  );
};

export default TodoList;
