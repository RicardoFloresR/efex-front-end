import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaidIcon from '@mui/icons-material/Paid';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid';
import {useTranslation} from "react-i18next";

import './dashboard-page.css';


export default function DashboardPage() {

    const [t] = useTranslation("global");

    const balances = [
        {
            currency: t("pages.dashboard.sections.balance.table.rows.currencies.usd"),
            amount: 1000000
        }, {
            currency: t("pages.dashboard.sections.balance.table.rows.currencies.mxn"),
            amount: 1000000
        }, {
            currency: t("pages.dashboard.sections.balance.table.rows.currencies.cop"),
            amount: 1000000
        }, {
            currency: t("pages.dashboard.sections.balance.table.rows.combined-balance"),
            amount: 1100000
        }
    ];

    const incomeOutcome = [{
        type: t("pages.dashboard.sections.summary.graph.y-labels.0"),
        amount: 1450000
    }, {
        type: t("pages.dashboard.sections.summary.graph.y-labels.1"),
        amount: 450000
    }]

    const valueFormatter = (value: number | null) => value ? value.toFixed(2) : '0';

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <Box>
        <Box
            sx={{
                border: '1px solid #C7C7C7',
                boxSizing: 'border-box',
                padding: '1rem',
                backgroundColor: 'white',
                marginBottom: '2rem',
                borderRadius: '5px'
            }}>
            <h3 style={{marginTop:'0px'}}>{t("pages.dashboard.sections.summary.title")}</h3>
            <Grid sx={{
                width: '100%',
                display: 'flex'
            }}
            container>
                <Grid item xs={12} md={12} lg={6}>
                    <h4 style={{marginTop:'0px'}}>{t("pages.dashboard.sections.summary.income.title")}: <span style={{color: '#83B4FF'}}>$450,000 USD</span></h4>
                    <Box className={'summary-pie-chart'}>
                        <PieChart
                            colors={['#83B4FF', '#5A72A0', '#1A2130']}
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 150000, label: t("pages.dashboard.sections.summary.income.income1") },
                                        { id: 1, value: 100000, label: t("pages.dashboard.sections.summary.income.income2") },
                                        { id: 2, value: 200000, label: t("pages.dashboard.sections.summary.income.income3") },
                                    ],
                                },
                            ]}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <h4 style={{marginTop:'0px'}}>{t("pages.dashboard.sections.summary.expenses.title")}: <span style={{color: '#83B4FF'}}>$450,000 USD</span></h4>
                    <Box className={'summary-pie-chart'}>
                        <PieChart
                            colors={['#FFEEA9', '#FFBF78', '#FF7D29']}
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 150000, label: t("pages.dashboard.sections.summary.expenses.expense1") },
                                        { id: 1, value: 100000, label: t("pages.dashboard.sections.summary.expenses.expense2") },
                                        { id: 2, value: 200000, label: t("pages.dashboard.sections.summary.expenses.expense3") }
                                    ],
                                },
                            ]}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{
                width: '100%',
                display: 'flex'
            }}
                 className={'summary-bar-chart'}>
                <BarChart
                    dataset={incomeOutcome}
                    yAxis={[{ scaleType: 'band', dataKey: 'type', colorMap: {
                            type: 'ordinal',
                            colors: ['#5A72A0', '#FF7D29']
                        } }]}
                    series={[{ dataKey: 'amount', valueFormatter }]}
                    layout="horizontal"
                    xAxis={[
                        {
                            label: `${t("pages.dashboard.sections.summary.graph.x-label")} (USD)`
                        }
                    ]}
                />
            </Box>
        </Box>
        <Box
        sx={{
            border: '1px solid #C7C7C7',
            boxSizing: 'border-box',
            padding: '1rem',
            backgroundColor: 'white',
            marginBottom: '2rem',
            borderRadius: '5px'
        }}>
            <Box>
                <h3 style={{marginTop:'0px'}}>{t("pages.dashboard.sections.balance.title")}</h3>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>{t("pages.dashboard.sections.balance.table.headers.currency")}</TableCell>
                                    <TableCell align="left">{t("pages.dashboard.sections.balance.table.headers.amount")}</TableCell>
                                    <TableCell align="center">{t("pages.dashboard.sections.balance.table.headers.options")}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {balances.map((row) => (
                                    <TableRow
                                        key={row.currency}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.currency}
                                        </TableCell>
                                        <TableCell align="left">${row.amount.toFixed(2)}</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="delete" onClick={handleClick}>
                                                <MenuIcon />
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
                                                <MenuItem onClick={handleClose}>{t("pages.dashboard.sections.balance.table.options.option1")}</MenuItem>
                                                <MenuItem onClick={handleClose}>{t("pages.dashboard.sections.balance.table.options.option2")}</MenuItem>
                                                <MenuItem onClick={handleClose}>{t("pages.dashboard.sections.balance.table.options.option3")}</MenuItem>
                                                <MenuItem onClick={handleClose}>{t("pages.dashboard.sections.balance.table.options.option4")}</MenuItem>
                                            </Menu>
                                            </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            border: '1px solid #C7C7C7',
            boxSizing: 'border-box',
            padding: '1rem',
            backgroundColor: 'white',
            marginBottom: '2rem',
            borderRadius: '5px'
        }}>
            <Box>
                <h3 style={{marginTop:'0px'}}>{t("pages.dashboard.sections.operations.title")}</h3>
                <Grid sx={{}} container>
                    <Grid sx={{
                        boxSizing: 'border-box',
                        padding: '1.5rem',
                        border: '1px solid #C7C7C7',
                        display: 'flex',
                        borderRadius: '5px'
                    }} item xs={12} md={6} lg={4}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><PaidIcon style={{color: '#5A72A0'}}/></Box>
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '2rem'
                        }}>
                            <Box sx={{
                                fontSize: '21px',
                                color: '#00143A'
                            }}>{t("pages.dashboard.sections.operations.operation1.title")}</Box>
                            <Box
                                sx={{
                                    color: '#9E9E9E'
                                }}>({t("pages.dashboard.sections.operations.operation1.subtitle")})</Box>
                            <Box sx={{
                                color: 'white',
                                backgroundColor: '#006BF8',
                                fontSize: '10px',
                                display: 'flex',
                                width: 'auto',
                                padding: '5px 7px',
                                boxSizing: 'border-box',
                                borderRadius: '10px',
                                position: 'absolute',
                                top: '0',
                                right: '-3rem'
                            }}>NEW</Box>
                        </Box>
                    </Grid>
                    <Grid sx={{
                        boxSizing: 'border-box',
                        padding: '1.5rem',
                        border: '1px solid #C7C7C7',
                        display: 'flex',
                        borderRadius: '5px'
                    }}  item xs={12} md={6} lg={4}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><AccountBalanceIcon style={{color: '#5A72A0'}}/></Box>
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '2rem'
                        }}>
                            <Box sx={{
                                fontSize: '21px',
                                color: '#00143A'
                            }}>{t("pages.dashboard.sections.operations.operation2.title")}</Box>
                            <Box
                                sx={{
                                    color: '#9E9E9E'
                                }}>({t("pages.dashboard.sections.operations.operation2.subtitle")})</Box>
                        </Box>
                    </Grid>
                    <Grid sx={{
                        boxSizing: 'border-box',
                        padding: '1.5rem',
                        border: '1px solid #C7C7C7',
                        display: 'flex',
                        borderRadius: '5px'
                    }}  item xs={12} md={6} lg={4}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><PaymentIcon style={{color: '#5A72A0'}}/></Box>
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '2rem'
                        }}>
                            <Box sx={{
                                fontSize: '21px',
                                color: '#00143A'
                            }}>{t("pages.dashboard.sections.operations.operation3.title")}</Box>
                            <Box
                                sx={{
                                    color: '#9E9E9E'
                                }}>({t("pages.dashboard.sections.operations.operation3.subtitle")})</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
}