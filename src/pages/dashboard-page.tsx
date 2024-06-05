import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FlagIcon from '@mui/icons-material/Flag';
import PaidIcon from '@mui/icons-material/Paid';
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
                    }}>Balance combinado</Box>
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
                        padding: '0.5rem',
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
        <Box>
            <Box>
                <Box><PaidIcon/></Box>
                <Box>
                    Button random
                </Box>
            </Box>
        </Box>
    </Box>
}