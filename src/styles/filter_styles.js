import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const filterTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#897A53",
    },
    textPrimary: {
      main: "#000000",
    },
  },
});

export const useFilterStyles = makeStyles(() => ({
  filter_div: {
    marginLeft: 20,
    textAlign: 'center',
    display: 'block'
  },
  paper: {
    paddingTop:10,
    marginRight: 40,
  },
  content_div: {
    
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  filter_item: {
   flexGrow: 1,
  },
  filter_search: {
    display: "block",
    marginRight: 40
  },
  input_filter: {
    width: "100%",
    marginLeft: 20,
  }
}));


