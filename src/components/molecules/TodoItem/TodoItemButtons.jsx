// ---------- React imports
import React from "react";
import { useDispatch } from "react-redux";
// ---------- Components imports
import Button from "@material-ui/core/Button";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import { deleteTodo, completeTodo } from "../../../redux_store/todosReducer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { updateEditing } from "../../../redux_store/appReducer";
// ---------- Styles imports
import { useListStyles } from "../../../styles/list_style";
import {
  successTheme,
  notSuccessTheme,
  editTheme,
  deleteTheme,
} from "../../../styles/button_style";
import { ThemeProvider } from "@material-ui/core/styles";

// ---------- Images imports
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Assignment from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItemButtons = ({ todo, handleUpdate, editable }) => {
  const widthMatches = useMediaQuery("(max-width:740px)");

  const classes = useListStyles();

  const dispatch = useDispatch();

  function handleDelete(todo) {
    dispatch(updateEditing(false))
    dispatch(deleteTodo(todo));
  }

  function handleComplete(todo) {
    dispatch(completeTodo(todo));
  }

  return (
    <Grid
      item
      className={!widthMatches ? classes.list_buttons : classes.list_buttons_xs}
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
  );
};

export default TodoItemButtons;
