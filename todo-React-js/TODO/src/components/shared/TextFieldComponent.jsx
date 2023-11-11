import { Box, TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = ({
  label,
  value,
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
        sx={{
          "& > :not(style)": { m: 1, width: { width } },
        }}
      >
        <TextField
          error={error}
          label={label}
          value={value}
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
