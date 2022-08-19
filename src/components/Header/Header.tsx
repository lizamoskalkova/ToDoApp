import {
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import Drawer from "../Drawer";


const Header = () =>
{
    return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar
        style={{
          justifyContent: "space-between ",
        }}
      >
        <Drawer/>
        <Typography
          style={{
            fontFamily: "Tahoma",
            color: "white",
            alignContent: "center",
          }}
        >
          ToDo App
        </Typography>
      </Toolbar>
    </AppBar>  
  </Box>);
}

export default Header;