// ---------- React imports
import React from "react";
import { useSelector } from "react-redux";
// ---------- Components imports
import Paper from "@material-ui/core/Paper";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import { getDeletedTodos, getFinishedTodos, getTotalTodos, getUnfinishedTodos } from '../../utils/todos'
// ---------- Styles imports
import { useCounterStyles } from "../../styles/counter_styles";
// ---------- Images imports

const TodoCounter = () => {
  const classes = useCounterStyles();
  const todos = useSelector((state) => state.todos);

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
