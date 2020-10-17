import React from "react";

import Checkbox from "@material-ui/core/Checkbox";

import { withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

export const FinishedCheckBox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[500],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const UnfinishedCheckBox = withStyles({
  root: {
    color: "#FCE8B3",
    "&$checked": {
      color: "#FCE8B3",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const DeletedCheckBox = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[500],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
