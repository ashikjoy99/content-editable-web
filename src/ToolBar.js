import { Button, Card, Grid } from "@mui/material";
import React from "react";

const ToolBar = () => {
  return (
    <Grid container m={2}>
      <Grid item xs={12}>
        <Card>ToolBar</Card>
        <Button>Add</Button>
      </Grid>
    </Grid>
  );
};

export default ToolBar;
