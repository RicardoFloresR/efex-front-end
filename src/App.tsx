// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Box from '@mui/material/Box';
import SideMenu from "./components/side-menu/side-menu.tsx"
import MainFrame from "./components/main-frame/main-frame";

export default  function App() {

  return (
    <Box
    sx={{
        display: 'flex',
        flexWrap: 'wrap'
    }}>
      <SideMenu/>
      <MainFrame />
    </Box>
  )
}
