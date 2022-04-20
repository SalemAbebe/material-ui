import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "Blue",
    padding: "5 75px",
  },
});
function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function ButtonExample() {
  return (
    <div>
      {" "}
      <Button
        size="large"
        color="primary"
        variant="contained"
        startIcon={<Save />}
      >
        Click to Save
      </Button>
      <hr />
      <Button
        size="large"
        color="secondary"
        variant="contained"
        style={{ fontSize: 16 }}
        endIcon={<Delete />}
      >
        Discard
      </Button>
      <br />
      <br />
      <ButtonGroup variant="contained" size="large" color="primary">
        <Button size="large" startIcon={<Save />}>
          Click to Save
        </Button>{" "}
        <Button
          // color="secondary"
          // style={{ fontSize: 16, fontWeight: 700 }}
          // disabled
          variant="contained"
          endIcon={<Delete />}
        >
          Discard
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonStyled />
    </div>
  );
}

export default ButtonExample;
