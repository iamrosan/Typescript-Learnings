import { Box, TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = ({
  label,
  value,
  defaultValue,
  name,
  type,
  error,
  helperText,
  width,
  variant,
  fullWidth,
  placeholder,
  handlechange,
  onKeyPress,
  ...otherProps
}) => {
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        width={width || "25ch"}
      >
        <TextField
          error={error}
          label={label}
          value={value}
          defaultValue={defaultValue || null}
          name={name}
          type={type}
          helperText={error ? helperText : null}
          variant={variant || "standard"}
          fullWidth={fullWidth}
          placeholder={placeholder}
          // variant="outlined"
          onChange={handlechange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handlesubmit();
            }
          }}
          {...otherProps}
        />
      </Box>
    </>
  );
};

export default TextFieldComponent;
