import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import "./App.css";
import Banner from "./Banner";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import ToolBar from "./ToolBar";

function App() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#808080" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ToolBar />
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{ backgroundColor: "white", margin: "10px", padding: "10px" }}
          >
            <Header />
            <Banner />
            <Body />
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
