// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenu from "./components/side-menu/side-menu.tsx"
import MainFrame from "./components/main-frame/main-frame";
import i18next from 'i18next';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources: {
        en: {
            global: global_en
        },
        es: {
            global: global_es
        }
    }
});



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
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  )
}
