// ----- React imports
import React from "react";
// ----- Components imports
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// ----- Layout imports
import Container from "@material-ui/core/Container";
// ----- Utils imports
import { useSelector } from "react-redux";
// ----- Styles imports
import { listTheme, useListStyles } from "../../styles/list_style";
import { ThemeProvider } from "@material-ui/core/styles";
// ----- Images imports
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = () => {
  const classes = useListStyles();

  const todos = useSelector((state) => state.todos);
  return (
    <Container>
      <ThemeProvider theme={listTheme}>
        <List component="nav">
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={`${todo.order + 1} - ${todo.name}`} />
              <Button
                variant="contained"
                color="success"
                size="small"
                startIcon={<AssignmentTurnedInIcon />}
              >
                Done
              </Button>
              <Button
                variant="contained"
                color="info"
                size="small"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                startIcon={<DeleteIcon />}
              >
                Done
              </Button>
            </ListItem>
          ))}
        </List>
      </ThemeProvider>
    </Container>
  );
};

export default TodoList;
