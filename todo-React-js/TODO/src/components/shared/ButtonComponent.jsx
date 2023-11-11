import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({
  variant,
  size,
  startIcon,
  endIcon,
  label,
  onClick,
}) => {
  return (
    <>
      <Button
        variant={variant}
        startIcon={startIcon || null}
        endIcon={endIcon || null}
        onClick={onClick}
        size={size}
      >
        {label}
      </Button>
    </>
  );
};

export default ButtonComponent;
