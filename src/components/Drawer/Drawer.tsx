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
import { tgUserName } from "../../telegram";

const Drawer = ({test, setTest}) => {
  const [open, setOpen] = useState<boolean>(false);

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
            <ListItem button onClick={() => setTest(!test)}>
              <ListItemText primary={"Previous ToDos"} />
            </ListItem>
            <ListItem button onClick={()=>{console.log('a')}}>
              <ListItemText primary={"Assigned ToDos"} />
            </ListItem>
          </List>
        </>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
