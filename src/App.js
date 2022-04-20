import "./App.css";
import React, { useState } from "react";
// import { Button, TextField } from "@material-ui/core";
import ButtonExample from "./components/Button";
import { TextField } from "@material-ui/core";
import NavBar from "./components/NavBar";
import CheckBoxExample from "./components/CheckBox";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CheckBoxExample />
      <ButtonExample />
      <TextField id="name" type="date" variant="filled" />
    </div>
  );
}

export default App;
