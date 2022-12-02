import React, { useState } from 'react'
import { Box, Stack, Typography, Pagination, Select, MenuItem } from '@mui/material'
import ImageCards from './ImageCards'

const ImageContainer = ({ images }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastImage = currentPage * 20
    const indexOfFirstImage = indexOfLastImage - 20
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage)

    const paginate = (e, value) => {
        setCurrentPage(value)
        const getMeTo = document.getElementById("image");
        getMeTo.scrollIntoView({ behavior: 'smooth' }, false)
    }
    return (
        <Box
            id='image'
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            p='20px'
        >
            <Typography varient='h1' mb='46px' textAlign='center' fontWeight='bold'>
                Showing Your Results
            </Typography>
            <Stack
                direction='row'
                sx={{
                    gap: {
                        lg: '110px', xs: '50px'
                    }
                }}
                flexWrap='wrap' justifyContent='center'
            >

                {currentImages.map((image, index) => (
                    <ImageCards key={index} image={image} />
                ))}

            </Stack>
            <Stack
                mt='100px'
                alignItems='center'
            >
                {images.length > 20 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(images.length / 20)}
                        page={currentPage}
                        onChange={paginate}
                    />
                )}
            </Stack>
        </ Box >
    )
}

export default ImageContainer