// ---------- React imports
import React from "react";
// ---------- Components imports
import Paper from "@material-ui/core/Paper";
import TodoForm from "../components/molecules/TodoForm";
import TodoList from "../components/organisms/TodoList";
import TodoCounter from "../components/molecules/TodoCounter";
// ---------- Layout imports
import Container from "@material-ui/core/Container";
// ---------- Styles imports
import { useHomeStyles } from "../styles/home_style";



const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper>
        <TodoForm />
        <TodoCounter />
        <TodoList />
      </Paper>
    </Container>
  );
};

export default Home;
