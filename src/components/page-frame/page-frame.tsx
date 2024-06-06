
import Box from '@mui/material/Box';

import DashboardPage from "../../pages/dashboard-page/dashboard-page";

export default function PageFrame() {
    return <Box sx={{height: 'calc(100vh - 61px)', overflow: 'scroll', boxSizing: 'border-box', padding: '1rem', backgroundColor: '#FBFCFF'}}>
        <Box><h1>Dashboard</h1></Box>
        <DashboardPage/>
    </Box>
}