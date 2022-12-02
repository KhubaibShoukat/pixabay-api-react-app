import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography } from '@mui/material'


const ImageCards = ({ image }) => {
    return (
        <Link to={`/image-detail/${image.id}`} className='image-card' >
            <img
                src={image.largeImageURL}
                alt={image.tags}
                loading='lazy'
            />
            <Stack direction='row'>
                <Button
                    sx={{ mt: '20px', mr: '10px', color: '#fff', background: '#ff2526' }}
                    fontSize='14px'
                    borderRadius='20px'
                    textTransform='capitalize'
                >
                    {`${image.likes} 💙`}
                </Button>
                <Button
                    sx={{ mt: '20px', mr: '10px', color: ' #fff', background: '#ffa9a9' }}
                    fontSize='14px'
                    borderRadius='20px'
                    textTransform='capitalize'
                >
                    {`${image.downloads} ⬇️`}
                </Button>
                <Button
                    sx={{ mt: '20px', color: ' #fff', background: '#fcc757' }}
                    fontSize='14px'
                    borderRadius='20px'
                    textTransform='capitalize'
                >
                    {`${image.views} 👁️‍🗨️`}
                </Button>
            </Stack>
            <Typography
                ml='21px'
                pb='10px'
                color='#000'
                fontWeight='bold'
                textTransform='capitalize'
            >
                {image.name}
            </Typography>
        </Link >
    )
}

export default ImageCards