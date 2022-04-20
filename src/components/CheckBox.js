import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "secondary checkbox" }}
            icon={<Save />}
            checkedIcon={<Save />}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

export default CheckBoxExample;
