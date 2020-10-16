// ---------- React imports
import React from "react";
import { useSelector } from "react-redux";
// ---------- Components imports
import Paper from "@material-ui/core/Paper";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import { ThemeProvider } from "@material-ui/core/styles";
// ---------- Styles imports
import { useCounterStyles } from "../../styles/counter_styles";

const TodoCounter = () => {
  const classes = useCounterStyles();
  const todos = useSelector((state) => state.todos);

  function getUnfinishedTodos(todos) {
    let unfinishedTodos = 0;
    todos.forEach((todo) => {
      if (!todo.completed && !todo.deleted) {
        unfinishedTodos++;
      }
    });
    return unfinishedTodos;
  }

  function getFinishedTodos(todos) {
    let finishedTodos = 0;
    todos.forEach((todo) => {
      if (todo.completed && !todo.deleted) {
        finishedTodos++;
      }
    });
    return finishedTodos;
  }

  function getDeletedTodos(todos) {
    let deletedTodos = 0;
    todos.forEach((todo) => {
      if (todo.deleted) {
        deletedTodos++;
      }
    });
    return deletedTodos;
  }

  function getTotalTodos(todos) {
    let totalTodos = 0;
    todos.forEach((todo) => {
      if (!todo.deleted) {
        totalTodos++;
      }
    });
    return totalTodos;
  }

  return (
    <Grid container className={classes.counter_div}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.texts_div}>
          <Grid item className={classes.counter_text}>
            <p>
              <strong>Total tasks: </strong>
              {getTotalTodos(todos)}
            </p>
          </Grid>
          <Grid item className={classes.counter_text}>
            <p>
              <strong>Unfinished tasks: </strong>
              {getUnfinishedTodos(todos)}
            </p>
          </Grid>
          <Grid item className={classes.counter_text}>
            <p>
              <strong>Finished tasks: </strong>
              {getFinishedTodos(todos)}
            </p>
          </Grid>
          <Grid item className={classes.counter_text}>
            <p>
              <strong>Deleted tasks: </strong>
              {getDeletedTodos(todos)}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TodoCounter;
