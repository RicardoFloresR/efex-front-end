import * as React from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from "react-i18next";

export default function AppHeader() {

    const [t, i18n] = useTranslation("global");

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChage = (lang: string) => {
        if (lang != i18n.language) {
            i18n.changeLanguage(lang)
        }
        setAnchorEl(null);
    }

    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: '1rem',
            color: '#9DA3AE',
            fontWeight: '400',
            fontSize: '0.7rem',
            borderBottom: '1px solid #C7C7C7'
    }}
    >
        <Box>{t("header.message")}: 03/07/2024, 18:00:00 GMT-5</Box>
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '2rem'
                }}
            >
                <Box>
                    <AccountCircleIcon/>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '0 0.5rem'
                    }}
                    >
                        <span>Santiago V.</span>
                        <span style={{fontSize: '0.6rem'}}>@SantiagoV.</span>
                    </Box>
                </Box>
                <Box>
                    <ExpandMoreIcon/>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <IconButton
                    onClick={handleClick}>
                    <LanguageIcon/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleLanguageChage("en")}>EN</MenuItem>
                    <MenuItem onClick={() => handleLanguageChage("es")}>ES</MenuItem>
                </Menu>
                <span>{i18n.language.toUpperCase()}</span>
            </Box>
        </Box>
    </Box>
}