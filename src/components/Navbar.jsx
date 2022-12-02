import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Box } from '@mui/material'

import Logo from '../assets/images/logo.png'


function Navbar() {
    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            px='20px'
        >
            <Link to='/'>
                <img src={Logo} alt='logo' style={{ width: '80px', height: '60px', margin: '0 20px' }} />
            </Link>
            <Stack
                direction='row'
                gap='40px'
                fontSize='16px'
                alignItems='flex-end'
            >
                <Link to='/' style={{ textDecoration: 'none', color: '#3A1212' }}>
                    Home
                </Link>
                <Link to='/my-account' style={{ textDecoration: 'none', color: '#3A1212' }}>
                    Profile
                </Link>
            </Stack>
        </Stack >
    )
}

export default Navbar