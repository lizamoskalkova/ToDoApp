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
import { makeStyles } from "@mui/styles";
import {Link, useHistory} from 'react-router-dom';



const useStyles:any = makeStyles({
    list: {
        width: 250,
    }
});

const Drawer=()=> {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const history = useHistory();
    const handleRoute=(a: string) => {
        history.push(a);
        window.location.reload();
      }
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
            <div className = {classes.list}>
                <Box textAlign = 'center' p={2}>
                 {Telegram.WebApp.initDataUnsafe.user?.first_name}
                
                </Box>
                <Divider />
                <List>
                    <ListItem button onClick ={()=>handleRoute('/PreviousToDos')}>
                        <ListItemText primary={'Previous ToDos'}/>
                    </ListItem>
                    <ListItem button onClick ={()=>handleRoute('/ActualToDos')}>
                        <ListItemText primary={'Assigned ToDos'}/>
                    </ListItem>
                </List>
            </div>
         </SwipeableDrawer>
         </div>
    );
}

export default Drawer;