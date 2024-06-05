import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FlagIcon from '@mui/icons-material/Flag';
import PaidIcon from '@mui/icons-material/Paid';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { BarChart } from '@mui/x-charts/BarChart';
export default function DashboardPage() {
    const balances = [
        {
            currency: 'USD',
            amount: 0
        }, {
            currency: 'MXN',
            amount: 0
        }, {
            currency: 'COP',
            amount: 0
        }
    ]

    return <Box>
        <Box
        sx={{
            border: '1px solid #C7C7C7',
            boxSizing: 'border-box',
            padding: '1rem',
            backgroundColor: 'white'
        }}>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Box>
                    <Box sx={{
                        fontSize: '16px',
                        marginBottom: '0.5rem'
                    }}>Balance General</Box>
                    <Box sx={{
                        fontSize: '32px',
                        color: '#006BF8',
                        display: 'flex',
                        flexWrap: 'wrap',
                        fontWeight: 'bold'
                    }}>0.00
                        <Box sx={{
                            color: '#9E9E9E',
                            fontWeight: 'normal'
                        }}>&#20; USD
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Button variant={'outlined'} sx={{
                        width: '100%',
                        borderRadius: '0px',
                        marginBottom: '0.5rem'
                    }}>Enviar pago</Button>
                    <Box>
                        <Button variant={'outlined'}>Añadir fondos</Button>
                        <Button variant={'outlined'} sx={{
                            margin: '0 0.5rem'
                        }}>Convertir</Button>
                        <Button disabled variant={'outlined'}>Retiro</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem'
            }}>
                {balances.map((balance) => {
                    return <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '25%',
                        boxSizing: 'border-box',
                        padding: '2rem',
                        border: '1px solid #C7C7C7'
                    }}>
                        <Box sx={{
                            width: '100%'
                        }}>
                            <Box sx={{
                                fontSize: '16px',
                                marginBottom: '0.5rem'
                            }}>Balance {balance.currency}</Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Box sx={{
                                    fontSize: '24px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    fontWeight: 'bold'
                                }}>${balance.amount.toFixed(2)}
                                    <Box sx={{
                                        color: '#9E9E9E',
                                        fontWeight: 'normal'
                                    }}>&#20; {balance.currency}
                                    </Box>
                                </Box>
                                <FlagIcon/>
                            </Box>
                        </Box>
                    </Box>
                })}
            </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem'
        }}>
            <Box sx={{
                boxSizing: 'border-box',
                padding: '1.5rem',
                border: '1px solid #C7C7C7',
                width: '45%',
                display: 'flex',
                backgroundColor: 'white'
            }}>
                <Box sx={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: 'gray',
                    borderRadius: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><PaidIcon/></Box>
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
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                padding: '1.5rem',
                border: '1px solid #FFA412',
                width: '45%',
                backgroundColor: 'white'
            }}>
                <Box>
                    <LocalAtmIcon style={{color: '#FFA412'}}/>
                </Box>
                <Box sx={{
                    fontSize: '21px',
                    color: '#00143A',
                    marginLeft: '2rem'
                }}>
                    Enviar pago
                </Box>
            </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem'
        }}>
            <Box sx={{
                width: '45%',
                backgroundColor: 'white'
            }}>
                <Box>
                    <Box>
                        Ingresos en:
                        <Box>(Enero)</Box>
                    </Box>
                    <Box>
                        <Button>Ver detalles</Button>
                    </Box>
                </Box>
                <Box>
                    <Box>$4,250,000 MXN</Box>
                </Box>
                <Box>
                    <BarChart
                        series={[
                            { data: [35, 44, 24, 34] }
                        ]}
                        height={290}
                        xAxis={[{ data: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], scaleType: 'band' }]}
                        yAxis={[{
                            label: "MDP (MXN)",
                            colorMap: {
                                type: 'continuous',
                                min: -10,
                                max: 10,
                                color: ['red', 'red'],
                            }
                        }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </Box>
            </Box>
        </Box>
    </Box>
}