import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const listTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#c4af77",
    },
  },
});

export const useListStyles = makeStyles(() => ({
  root: {
  }
}));
