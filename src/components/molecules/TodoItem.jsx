// ---------- React imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// ---------- Components imports
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
// ---------- Utils imports
import { deleteTodo, completeTodo } from "../../redux_store/todosReducer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// ---------- Styles imports
import { listTheme, useListStyles } from "../../styles/list_style";
import {
  successTheme,
  notSuccessTheme,
  editTheme,
  deleteTheme,
} from "../../styles/button_style";
import { ThemeProvider } from "@material-ui/core/styles";
// ---------- Images imports
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Assignment from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

const TodoItem = ({ todo }) => {
  const widthMatches = useMediaQuery("(max-width:740px)");
  const classes = useListStyles();

  const dispatch = useDispatch();

  function handleDelete(todo) {
    dispatch(deleteTodo(todo));
  }

  function handleComplete(todo) {
    console.log(todo)
    dispatch(completeTodo(todo));
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
          <Paper
            elevation={1}
            className={todo.completed ? classes.paper_complete : classes.paper}
          >
            <p
              className={
                todo.completed
                  ? classes.paper_text_completed
                  : classes.paper_text
              }
            >
              <strong>{todo.name}</strong>
            </p>
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
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  <EditIcon color="secondary" />
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
