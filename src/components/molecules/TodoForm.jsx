// ----- React imports
import React from "react";
// ----- Components imports
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
// ----- Layout imports
import Grid from "@material-ui/core/Grid";
// ----- Utils imports
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// ----- Styles imports
import { homeTheme, useHomeStyles } from "../../styles/home_theme";

const TodoForm = () => {
  const classes = useHomeStyles();
  const widthMatches = useMediaQuery("(max-width:360px)");

  return (
    <form autoComplete="off">
      <ThemeProvider theme={homeTheme}>
        <br />
        <FormLabel className={classes.label}>What you have to do?</FormLabel>
        <Grid
          container
          direction="row"
          spacing={4}
          className={classes.todo_form}
        >
          <Grid item className={classes.todo_input}>
            <TextField
              type="string"
              id="todo_input"
              fullWidth
              InputProps={{ className: classes.input_label }}
            />
          </Grid>
          <Grid
            item
            className={!widthMatches ? classes.button : classes.button_xs}
          >
            <Button size="small" fullWidth variant="contained" color="primary">
              Add
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </form>
  );
};

export default TodoForm;
