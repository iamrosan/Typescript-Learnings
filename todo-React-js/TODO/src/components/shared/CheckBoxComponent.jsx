import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckBoxComponent = ({
  label,
  required,
  disabled,
  checked,
  handleChange,
}) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={label}
          required={required || null}
          disabled={disabled}
          checked={checked || null}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </FormGroup>
    </>
  );
};

export default CheckBoxComponent;
