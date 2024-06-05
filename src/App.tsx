// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenu from "./components/side-menu/side-menu.tsx"
import MainFrame from "./components/main-frame/main-frame";

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
        blue: Palette['primary'];
    }

    interface PaletteOptions {
        blue?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        blue: true;
    }
}

const theme = createTheme({
    palette: {
        blue: {
            main: '#5A72A0',
            light: '#83B4FF',
            dark: '#1A2130',
            contrastText: '#ffffff ',
        },
    },
});
export default  function App() {

  return (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
            <SideMenu/>
            <MainFrame />
        </Box>
    </ThemeProvider>
  )
}
