// ---------- React imports
import React from "react";
// ---------- Components imports
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Styles imports
import { useListStyles } from "../../styles/list_style";

const TodoTextItem = ({ todo }) => {
  const classes = useListStyles();

  const setAvatarClass = (todo) => {
    if (todo.completed && !todo.deleted) {
      return classes.avatar_completed;
    } else if (todo.deleted) {
      return classes.avatar_deleted;
    } else {
      return classes.avatar;
    }
  };

  const setPaperClass = (todo) => {
    if (todo.completed && !todo.deleted) {
      return classes.paper_completed;
    } else if (todo.deleted) {
      return classes.paper_deleted;
    } else {
      return classes.paper;
    }
  };

  const setPaperTextClass = (todo) => {
    if (todo.completed && !todo.deleted) {
      return classes.paper_text_completed;
    } else if (todo.deleted) {
      return classes.paper_text_deleted;
    } else {
      return classes.paper_text;
    }
  };

  return (
    <ListItem>
      <Grid container direction="row" spacing={2} className={classes.list_row}>
        <ListItemAvatar className={classes.avatar_div}>
          <Avatar variant="rounded" className={setAvatarClass(todo)}>
            {todo.order}
          </Avatar>
        </ListItemAvatar>
        <Grid item className={classes.list_item_text}>
          <Paper elevation={1} className={setPaperClass(todo)}>
            <p className={setPaperTextClass(todo)}>
              <strong>{todo.name}</strong>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default TodoTextItem;
