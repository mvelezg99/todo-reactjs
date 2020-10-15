// ----- React imports
import React from "react";
// ----- Components imports
import Paper from "@material-ui/core/Paper";
import TodoForm from "../components/molecules/TodoForm";
import TodoList from "../components/molecules/TodoList";
// ----- Layout imports
import Container from "@material-ui/core/Container";
// ----- Utils imports
// ----- Styles imports
import { useHomeStyles } from "../styles/home_style";


const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper>
        <TodoForm />
        <br />
        <TodoList />
      </Paper>
    </Container>
  );
};

export default Home;
