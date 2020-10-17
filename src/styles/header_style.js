import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const headerTheme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 15,
  },
  palette: {
    primary: {
      main: "#F7D881",
    },
    textPrimary: {
      main: "#000000",
    },
  },
});

export const useHeaderStyles = makeStyles(() => ({
  title: {
    alignItems: "center",
    fontWeight: "bold",
    width: "100%",
    userSelect: "none",
  },
  image: {
    userSelect: "none",
    msUserSelect: "none",
  },
}));
