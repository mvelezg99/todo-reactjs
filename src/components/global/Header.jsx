import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/core/styles";

import "../../styles/Header.css";
import { headerTheme, useHeaderStyles } from "../../styles/header_theme";
import logoTodo from "../../images/logo_todo.png";

const Header = () => {
  const classes = useHeaderStyles();

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className={classes.image}>
            <img alt="logo TODO" src={logoTodo} width="50" height="50" draggable="false" />
          </div>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            TODO List React Application
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
