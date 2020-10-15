// ----- React imports
import React from "react";
// ----- Components imports
import Paper from "@material-ui/core/Paper";
import TodoForm from "../components/molecules/TodoForm";

// ----- Layout imports
import Container from "@material-ui/core/Container";
// ----- Utils imports
// ----- Styles imports
import { useHomeStyles } from "../styles/home_theme";


const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper>
        <TodoForm />
        <br />
        
      </Paper>
    </Container>
  );
};

export default Home;
