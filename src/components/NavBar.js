import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function navBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography> React Navbar Example</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default navBar;
