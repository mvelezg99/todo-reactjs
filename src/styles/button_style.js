import { createMuiTheme } from "@material-ui/core/styles";
import { green, blueGrey, red } from "@material-ui/core/colors";

export const successTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export const notSuccessTheme = createMuiTheme({
  palette: {
    primary:{
      main: "#fce8b3"
    },
    secondary: {
      main: "#FFFFFF",
    }
  }
})

export const editTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export const orderTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[800],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export const deleteTheme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});
