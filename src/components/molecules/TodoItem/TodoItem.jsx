// ---------- React imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// ---------- Components imports
import TodoItemButtons from "./TodoItemButtons";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import { updateTodo } from "../../../redux_store/todosReducer";
import { updateEditing } from "../../../redux_store/appReducer";

// ---------- Styles imports
import { useListStyles } from "../../../styles/list_style";

const TodoItem = ({ todo }) => {
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

  function assignPaperClass(todo) {
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
          <Paper elevation={1} className={assignPaperClass(todo)}>
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
        <TodoItemButtons
          todo={todo}
          handleUpdate={handleUpdate}
          editable={editable}
        />
      </Grid>
    </ListItem>
  );
};

export default TodoItem;
