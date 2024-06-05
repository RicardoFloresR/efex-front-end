import Box from '@mui/material/Box';

import AppHeader from "../app-header/app-header";
import PageFrame from "../page-frame/page-frame";


export default function MainFrame() {
    return <Box sx={{width: 'calc(100vw - 251px)', height: '100%', maxHeight: '100vh', overflow: 'hidden'}}>
        <AppHeader/>
        <PageFrame/>
    </Box>
}