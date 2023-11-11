import { Box, Typography } from "@mui/material";
import React from "react";

const FileHeadingComponent = ({ title, variant, sx }) => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} sx={sx || null}>
        <Typography variant={variant}>{title}</Typography>
      </Box>
    </>
  );
};

export default FileHeadingComponent;
