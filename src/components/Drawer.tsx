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



export default function Drawer() {

    const [open, setOpen] = useState<boolean>(false);
    return (
    <div>
        <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        onClick={() => setOpen(true)}
        >
            <Menu></Menu>
         </IconButton>
         <SwipeableDrawer
             anchor = 'left'
             open = {open}
             onClose= {() => setOpen(false)}
             onOpen ={() => console.log()}>
            <div>
                <Box textAlign = 'center' p={2}>
                 {Telegram.WebApp.initDataUnsafe.user?.first_name}
                
                </Box>
                <Divider />
                <List>
                    <ListItem button onClick ={() => console.log()}>
                        <ListItemText primary={'Previous ToDos'}/>
                    </ListItem>
                    <ListItem button onClick ={() => console.log()}>
                        <ListItemText primary={'Assigned ToDos'}/>
                    </ListItem>
                </List>
            </div>
         </SwipeableDrawer>
         </div>
    );
}
