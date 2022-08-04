import { Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: "8vh",
      }}
    >
      <Typography>StoreName</Typography>
      <Typography>SignIn</Typography>
    </Stack>
  );
};

export default Header;
