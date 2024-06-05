// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactsIcon from '@mui/icons-material/Contacts';
import LockIcon from '@mui/icons-material/Lock';

export default function SideMenu() {
    const menuOptions = {
        ['Dashboard']: <DashboardIcon style={{color: '#5A72A0'}} />,
        ['Ingresos']: <ReceiptIcon style={{color: '#5A72A0'}} />,
        ['Egresos']: <ReceiptIcon style={{color: '#5A72A0'}} />,
        ['Contactos']: <ContactsIcon style={{color: '#5A72A0'}} />,
        ['Seguridad']: <LockIcon style={{color: '#5A72A0'}} />,
    }

    return (
        <div>
            <Box
                sx={{ width: 250, borderRight: '1px solid #C7C7C7', height: '100vh', backgroundColor: '#FBFCFF', display: 'flex', flexDirection: 'column'}}
                role="presentation"
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img style={{maxWidth: '70%', width: 'auto'}} src={'Logo-Efex-1.png'} alt={'Efex Logo'}/>
                </Box>
                <Divider/>
                <Box sx={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <List>
                        {Object.keys(menuOptions).map((menuItem, idx) => (
                            <ListItem key={menuItem}>
                                <ListItemButton selected={idx === 0}>
                                    <ListItemIcon>
                                        {menuOptions[menuItem as keyof typeof menuOptions]}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Box
                        sx={{
                            width: '100%',
                            boxSizing: 'border-box',
                            padding: '1rem'
                        }}
                    >
                        <Button sx={{width: '90%'}} variant={'contained'} color={'blue'} startIcon={<CoPresentIcon />}>
                            Refiere y Gana!
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}