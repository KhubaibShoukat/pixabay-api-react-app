import React from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ImageDetails from './pages/ImageDetails'
import ProfileAccount from './pages/ProfileAccount'

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/image-detail/:id' element={<ImageDetails />} />
                <Route path='/my-account' element={<ProfileAccount />} />
            </Routes>
        </Box>
    )
}

export default App