import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const homeTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#c4af77",
    },
    textPrimary: {
      main: "#000000",
    },
  },
});

export const useHomeStyles = makeStyles(() => ({
  root: {
    marginTop: 35,
  },
  todo_input: {
    marginLeft: 20,
    marginRight: 10,
    flexGrow: 4,
  },
  todo_form: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 15,
  },
  label: {
    color: "#938561",
    width: "100%",
    display: "block",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input_label: {
    color: "#938561",
  },
  button: {
    marginRight: 20,
  },
  button_xs: {
    marginLeft: 20,
    marginRight: 20,
    display: "block",
    width: '100%',
  }
}));
