// ---------- React imports 
import React from "react";
// ---------- Components imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// --------- Utils imports
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "@material-ui/core/styles";
// ---------- Styles imports
import { headerTheme, useHeaderStyles } from "../../styles/header_style";
// ---------- Images imports
import logoTodo from "../../images/logo_todo.png";

const Header = () => {
  const classes = useHeaderStyles();
  const widthMatches = useMediaQuery("(min-width:200px)");

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className={classes.image}>
            <img
              alt="logo TODO"
              src={logoTodo}
              width="50"
              height="50"
              draggable="false"
            />
          </div>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            {widthMatches ? "To Do List" : "To Do"}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
