import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const counterTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#F7D881",
    },
    textPrimary: {
      main: "#000000",
    },
  },
});

export const useCounterStyles = makeStyles(() => ({
  counter_div: {
    marginLeft: 20,
    textAlign: "center",
    display: "block"
  },
  paper: {
    marginTop: 20,
    backgroundColor: "#F7D881",
    marginRight: 40,
  },
  texts_div: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  counter_text: {
   flexGrow: 1,
  }
}));