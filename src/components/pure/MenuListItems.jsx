import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Home, Settings, } from '@mui/icons-material';


const getIcon = (Icon) => {
    switch (Icon) {
        case 'Home':
            return(<Home></Home>)
        case 'Tasks':
            return(<Home></Home>)
        case 'Settings':
            return(<Settings></Settings>)
    
        default:
            return (<Home></Home>)
    }
}


const MenuLIstItems = ({List}) => {

    const navigater = useNavigate();

    const navigateTo = (path) => {
        navigater(path)

    }

    return(
        <List>
            {List.map(({text, path, icon}, index) =>(
                <ListItem key={index} button onClick={() => navigateTo(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}>
        
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

export default MenuLIstItems;