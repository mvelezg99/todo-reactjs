// ---------- React imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// ---------- Components imports
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import {
  deleteTodo,
  completeTodo,
  updateTodo,
} from "../../redux_store/todosReducer";
import { updateEditing } from "../../redux_store/appReducer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// ---------- Styles imports
import { useListStyles } from "../../styles/list_style";
import {
  successTheme,
  notSuccessTheme,
  editTheme,
  deleteTheme,
} from "../../styles/button_style";
import { ThemeProvider } from "@material-ui/core/styles";
// ---------- Images imports
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Assignment from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = ({ todo }) => {
  const widthMatches = useMediaQuery("(max-width:740px)");
  const classes = useListStyles();
  const dispatch = useDispatch();

  const isEditing = useSelector((state) => state.app.isEditing);

  const [editable, setEditable] = useState(false);

  const [currentTodo, setCurrentTodo] = useState({
    name: todo.name,
    error: {
      error: false,
      message: "",
    },
  });

  function handleDelete(todo) {
    dispatch(deleteTodo(todo));
  }

  function handleComplete(todo) {
    dispatch(completeTodo(todo));
  }

  function handleUpdate() {
    if (!editable) {
      dispatch(updateEditing(!isEditing));
      setEditable(!editable);
    } else if (!currentTodo.error.error) {
      dispatch(updateTodo({ ...todo, name: currentTodo.name }));
      setCurrentTodo({
        ...currentTodo,
        name: todo.name,
      });
      dispatch(updateEditing(!isEditing));
      setEditable(!editable);
    }
  }

  const handleUpdateChange = (e) => {
    setCurrentTodo({
      name: e.target.value,
      error: validateTodo(e.target.value),
    });
  };

  function validateTodo(name) {
    if (name.length < 6) {
      return {
        error: true,
        message: "The task name should be at least 6 characters long.",
      };
    } else if (name.length > 40) {
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

  function assignPaperEditingClass(todo) {
    if (isEditing && todo.completed) return classes.paper_completed_editing;
    else if (isEditing) return classes.paper_editing;
    else if (todo.completed) return classes.paper_completed;
    else return classes.paper;
  }

  return (
    <ListItem>
      <Grid container direction="row" spacing={2} className={classes.list_row}>
        <ListItemAvatar className={classes.avatar_div}>
          <Avatar
            variant="rounded"
            className={
              todo.completed ? classes.avatar_completed : classes.avatar
            }
          >
            {todo.order}
          </Avatar>
        </ListItemAvatar>
        <Grid item className={classes.list_item_text}>
          <Paper elevation={1} className={assignPaperEditingClass(todo)}>
            {editable ? (
              <TextField
                autoComplete="off"
                type="string"
                className={classes.input_div}
                error={currentTodo.error.error}
                helperText={currentTodo.error.message}
                onChange={handleUpdateChange}
                onKeyUp={(e) => e.key === "Enter" && handleUpdate()}
                value={currentTodo.name}
                size="small"
              />
            ) : (
              <p
                className={
                  todo.completed
                    ? classes.paper_text_completed
                    : classes.paper_text
                }
              >
                <strong>{todo.name}</strong>
              </p>
            )}
          </Paper>
        </Grid>
        <Grid
          item
          className={
            !widthMatches ? classes.list_buttons : classes.list_buttons_xs
          }
        >
          <Grid container spacing={1} className={classes.buttons_div}>
            <Grid item className={classes.item_button}>
              <ThemeProvider
                theme={todo.completed ? notSuccessTheme : successTheme}
              >
                <Button
                  className={classes.button}
                  onClick={() => handleComplete(todo)}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  {!todo.completed ? (
                    <AssignmentTurnedInIcon color="secondary" />
                  ) : (
                    <Assignment color="secondary" />
                  )}
                </Button>
              </ThemeProvider>
            </Grid>
            <Grid item className={classes.item_button}>
              <ThemeProvider theme={editTheme}>
                <Button
                  className={classes.button}
                  onClick={() => handleUpdate()}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  {!editable ? (
                    <EditIcon color="secondary" />
                  ) : (
                    <SaveIcon color="secondary" />
                  )}
                </Button>
              </ThemeProvider>
            </Grid>
            <Grid item className={classes.item_button}>
              <ThemeProvider theme={deleteTheme}>
                <Button
                  className={classes.button}
                  onClick={() => handleDelete(todo)}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  <DeleteIcon color="secondary" />
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default TodoItem;
