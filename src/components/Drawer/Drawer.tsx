import {
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { tgUserName } from "../../telegram";

const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const history = useHistory();
  const handleRoute = (a: string) => {
    history.push(a);
    window.location.reload();
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <Menu></Menu>
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => console.log()}
      >
        <>
          <Box textAlign="center" p={2}>
            {tgUserName}
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => handleRoute("/PreviousToDos")}>
              <ListItemText primary={"Previous ToDos"} />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/ActualToDos")}>
              <ListItemText primary={"Assigned ToDos"} />
            </ListItem>
          </List>
        </>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
