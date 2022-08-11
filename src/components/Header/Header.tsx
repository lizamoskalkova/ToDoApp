import {
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import Drawer from "../Drawer";


const Header = ({test, setTest}) =>
{
    return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar
        style={{
          justifyContent: "space-between ",
        }}
      >
        <Drawer test={test} setTest={setTest} />
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