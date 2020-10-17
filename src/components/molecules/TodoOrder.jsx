// ---------- React imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// ---------- Components imports
import Button from "@material-ui/core/Button";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import {
  orderTodosAsc,
  orderTodosDesc,
  orderTodosFin,
  orderTodosUnf,
} from "../../redux_store/todosReducer";
// ---------- Styles imports
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { useFilterStyles } from "../../styles/filter_styles";
import { orderTheme } from "../../styles/button_style";
// ---------- Images imports
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Done from "@material-ui/icons/Done";
import PriorityHigh from "@material-ui/icons/PriorityHigh";

const TodoOrder = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filterClasses = useFilterStyles();

  const handleClickOrderAsc = (todos) => {
    dispatch(orderTodosAsc(todos));
  };

  const handleClickOrderDesc = (todos) => {
    dispatch(orderTodosDesc(todos));
  };

  const handleClickOrderFin = (todos) => {
    dispatch(orderTodosFin(todos));
  };

  const handleClickOrderUnf = (todos) => {
    dispatch(orderTodosUnf(todos));
  };

  return (
    <ThemeProvider theme={orderTheme}>
      <Grid container spacing={2} className={filterClasses.content_div}>
        <Grid item className={filterClasses.filter_item}>
          <Button
            onClick={() => handleClickOrderAsc(todos)}
            size="small"
            className={filterClasses.buttons}
            startIcon={<ArrowUpward />}
            color="primary"
          >
            Ascending order
          </Button>
        </Grid>
        <Grid item className={filterClasses.filter_item}>
          <Button
            onClick={() => handleClickOrderDesc(todos)}
            size="small"
            className={filterClasses.buttons}
            startIcon={<ArrowDownward />}
            color="primary"
          >
            Descending order
          </Button>
        </Grid>
        <Grid item className={filterClasses.filter_item}>
          <Button
            onClick={() => handleClickOrderFin(todos)}
            size="small"
            className={filterClasses.buttons}
            startIcon={<Done />}
            color="primary"
          >
            Finished order
          </Button>
        </Grid>
        <Grid item className={filterClasses.filter_item}>
          <Button
            onClick={() => handleClickOrderUnf(todos)}
            size="small"
            className={filterClasses.buttons}
            startIcon={<PriorityHigh />}
            color="primary"
          >
            Unfinished order
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TodoOrder;
