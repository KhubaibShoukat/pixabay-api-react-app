import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import ImageContainer from '../components/ImageContainer'
const Home = () => {
    const [images, setImages] = useState([])
    const [results, setResults] = useState(false)
    console.log(images)
    return (
        <Box>
            <HeroBanner
                setImages={setImages}
                setResults={setResults}
            />
            {(results ? <ImageContainer images={images}  /> : '')}
        </Box>
    )
}

export default Home