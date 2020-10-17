import { makeStyles } from "@material-ui/core/styles";

export const useCounterStyles = makeStyles(() => ({
  counter_div: {
    marginLeft: 20,
    textAlign: "center",
    alignItems: "center",
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
