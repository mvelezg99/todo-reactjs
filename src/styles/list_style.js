import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

export const listTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#c4af77",
    },
  },
});

export const useListStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: "#fce8b3",
    color: "black",
    height: 30,
    width: 50,
  },
  avatar_completed: {
    backgroundColor: green[500],
    color: "#FFFFFF",
    height: 30,
    width: 50,
  },
  avatar_deleted:{
    backgroundColor: red[500],
    color: "#FFFFFF",
    height: 30,
    width: 50,
  },
  avatar_div: {
    margin: "auto",
  },
  list_row: {
    display: "flex",
    justifyContent: "space-between",
  },
  list_item_text: {
    flexGrow: 5,
  },
  list_buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  list_buttons_xs: {
    display: "block",
    margin: "auto",
    width: "100%",
  },
  buttons_div: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  item_button: {
    flex: 1,
  },
  button: {
    width: "100%"
  },
  paper: {
    backgroundColor: "#fce8b3",
    height: 30,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 0,
    marginBottom: 15,
  },
  paper_editing: {
    backgroundColor: "#fce8b3",
    marginTop: 5,
  },
  paper_completed:{
    backgroundColor: green[500],
    height: 30,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 0,
    marginBottom: 15
  },
  paper_completed_editing:{
    backgroundColor: green[500],
    marginTop: 5,
  },
  paper_deleted: {
    backgroundColor: red[500],
    height: 30,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 0,
    marginBottom: 15
  },
  paper_text: {
    marginLeft: 20,
    paddingTop: 2,
    fontWeight: "bold",
    wordBreak: "break-word",
  },
  paper_text_completed:{
    marginLeft: 20,
    paddingTop: 2,
    wordBreak: "break-word",
    color: "#234f3a",
    fontStyle: "italic",
    textDecoration: "line-through"
  },
  paper_text_deleted:{
    marginLeft: 20,
    paddingTop: 2,
    wordBreak: "break-word",
    color: red[900],
    fontStyle: "italic",
    textDecoration: "line-through"
  },
  input_div: {
    marginLeft: 20,
    flexGrow: 8,
    width: "75%",
  }
}));
