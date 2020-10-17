// ---------- React imports
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// ---------- Components imports
import {
  FinishedCheckBox,
  UnfinishedCheckBox,
  DeletedCheckBox,
} from "../customs/customCheckboxes";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// ---------- Layout imports
import Grid from "@material-ui/core/Grid";
// ---------- Utils imports
import { FILTER_OPTIONS } from "../../utils/filterOptions";
import {
  getTotalTodos,
  filterSearchTodos,
  filterFinishedTodos,
  filterUnfinishedTodos,
  filterDeletedTodos,
} from "../../utils/todos";
// ---------- Styles imports
import { useFilterStyles } from "../../styles/filter_styles";
// ---------- Images imports
import Search from "@material-ui/icons/Search";

const TodoFilter = ({
  setIsFilter,
  setIsSearch,
  setSearch,
  setFilterOption,
  search,
  filterOption,
}) => {
  const todos = useSelector((state) => state.todos);

  const filterClasses = useFilterStyles();

  useEffect(() => {
    if (getTotalTodos(todos) === 0) {
      setSearch("");
      setFilterOption(FILTER_OPTIONS.all);
    }
  }, [todos]);

  const handleCheck = (e, option) => {
    setFilterOption(e.target.checked ? option : FILTER_OPTIONS.all);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Grid item className={filterClasses.filter_search}>
        <TextField
          className={filterClasses.input_filter}
          id="input_filter"
          onChange={handleSearchChange}
          value={search}
          placeholder="Search tasks ..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid container spacing={2} className={filterClasses.content_div}>
        <Grid item className={filterClasses.filter_item}>
          <FormControlLabel
            control={
              <FinishedCheckBox
                checked={filterOption === FILTER_OPTIONS.finished}
                onChange={(e) => handleCheck(e, FILTER_OPTIONS.finished)}
                name="finishCheck"
              />
            }
            label="Finished tasks"
          />
        </Grid>
        <Grid item className={filterClasses.filter_item}>
          <FormControlLabel
            control={
              <UnfinishedCheckBox
                checked={filterOption === FILTER_OPTIONS.unfinished}
                onChange={(e) => handleCheck(e, FILTER_OPTIONS.unfinished)}
                name="unfinishCheck"
              />
            }
            label="Unfinished tasks"
          />
        </Grid>
        <Grid item className={filterClasses.filter_item}>
          <FormControlLabel
            control={
              <DeletedCheckBox
                checked={filterOption === FILTER_OPTIONS.deleted}
                onChange={(e) => handleCheck(e, FILTER_OPTIONS.deleted)}
                name="deleteCheck"
              />
            }
            label="Delete tasks"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoFilter;
