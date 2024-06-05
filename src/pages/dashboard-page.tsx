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


export default function DashboardPage() {

    const balances = [
        {
            currency: 'Dólar Estadounidense (USD)',
            amount: 1000000
        }, {
            currency: 'Peso Mexicano (MXN)',
            amount: 1000000
        }, {
            currency: 'Peso Colombiano (COP)',
            amount: 1000000
        }, {
            currency: 'Balance Combinado',
            amount: 1100000
        }
    ];

    const incomeOutcome = [{
        type: 'Ingresos',
        amount: 1450000
    }, {
        type: 'Egresos',
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
            <h3 style={{marginTop:'0px'}}>Resumen</h3>
            <Grid sx={{
                width: '100%',
                display: 'flex'
            }}
            container>
                <Grid item xs={12} md={12} lg={6}>
                    <h4 style={{marginTop:'0px'}}>Ingresos: <span style={{color: '#83B4FF'}}>$450,000 USD</span></h4>
                    <Box
                        sx={{
                            height: '10rem'
                        }}>
                        <PieChart
                            colors={['#83B4FF', '#5A72A0', '#1A2130']}
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 150000, label: 'Ingresos por nómina' },
                                        { id: 1, value: 100000, label: 'Transferencias Recibidas' },
                                        { id: 2, value: 200000, label: 'Cash Back' },
                                    ],
                                },
                            ]}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <h4 style={{marginTop:'0px'}}>Engresos: <span style={{color: '#83B4FF'}}>$450,000 USD</span></h4>
                    <Box sx={{
                        height: '10rem'
                    }}>
                        <PieChart
                            colors={['#FFEEA9', '#FFBF78', '#FF7D29']}
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 150000, label: 'Pagos con TDD' },
                                        { id: 1, value: 100000, label: 'Pagos Domiciliados' },
                                        { id: 2, value: 200000, label: 'Pagos de Tarjetas' }
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
            }}>
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
                            label: 'Monto (USD)'
                        }
                    ]}
                    width={800}
                    height={150}
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
                <h3 style={{marginTop:'0px'}}>Balances</h3>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Moneda</TableCell>
                                    <TableCell align="left">Cantidad</TableCell>
                                    <TableCell align="center">Opciones</TableCell>
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
                                                <MenuItem onClick={handleClose}>Enviar Pago</MenuItem>
                                                <MenuItem onClick={handleClose}>Añadir fondos</MenuItem>
                                                <MenuItem onClick={handleClose}>Convertir</MenuItem>
                                                <MenuItem onClick={handleClose}>Retiros</MenuItem>
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
                <h3 style={{marginTop:'0px'}}>Operaciones</h3>
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
                            }}>Crédito para adelanto</Box>
                            <Box
                                sx={{
                                    color: '#9E9E9E'
                                }}>(Pago a proveedores)</Box>
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
                            }}>Solicitar Crédito</Box>
                            <Box
                                sx={{
                                    color: '#9E9E9E'
                                }}>(Respuesta inmediata)</Box>
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
                            }}>Pagar Impuestos</Box>
                            <Box
                                sx={{
                                    color: '#9E9E9E'
                                }}>(En cualquier divisa)</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
}