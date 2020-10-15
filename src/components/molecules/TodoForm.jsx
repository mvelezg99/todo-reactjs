// ---------- React imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// ---------- Components imports
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import { v1 as uuid } from "uuid";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTodo } from "../../redux_store/todosReducer";
// ---------- Styles imports
import { homeTheme, useHomeStyles } from "../../styles/home_style";

const INITIAL_TODO = {
  name: "",
  error: {
    error: false,
    message: "",
  },
};

const TodoForm = () => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const widthMatches = useMediaQuery("(max-width:470px)");

  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState(INITIAL_TODO);

  const handleSubmit = () => {
    if (todo.name === "") {
      setTodo({
        name: todo.name,
        error: {
          error: true,
          message: "Can not add an empty task."
        }
      })
    }

    if (!todo.error.error && todo.name !== "") {
      const newTodo = {
        id: uuid(),
        order: todos.length,
        name: todo.name,
        completed: false,
        deleted: false,
      };
      dispatch(createTodo(newTodo));
      setTodo(INITIAL_TODO);
    } 
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setTodo({
      name: value,
      error: validateTodo(value),
    });
  };

  function validateTodo(todo) {
    if (todo.length < 6) {
      return {
        error: true,
        message: "The task name should be at least 6 characters long.",
      };
    } else if (todo.length > 40) {
      return {
        error: true,
        message: "The task name should not be more than 40 characters long.",
      };
    } else {
      return {
        error: false,
        message: "",
      };
    }
  }

  return (
    <ThemeProvider theme={homeTheme}>
      <br />
      <FormLabel className={classes.label}>What you have to do?</FormLabel>
      <Grid container direction="row" spacing={4} className={classes.todo_form}>
        <Grid item className={classes.todo_input}>
          <TextField
            autoComplete="off"
            type="string"
            error={todo.error.error}
            helperText={todo.error.message}
            onChange={handleChange}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
            value={todo.name}
            id="todo_input"
            fullWidth
            InputProps={{ className: classes.input_label }}
          />
        </Grid>
        <Grid
          item
          className={!widthMatches ? classes.button : classes.button_xs}
        >
          <Button
            onClick={handleSubmit}
            size="small"
            fullWidth
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TodoForm;
