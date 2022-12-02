import React from 'react'
import { Typography, Stack, Button, Box } from '@mui/material'

const Details = ({ detail }) => {
    const { user, user_id, views, likes, downloads, tags, collections, comments, largeImageURL, userImageURL } = detail

    return (
        <Stack
            gap='20px'
            sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
        >
            <img src={largeImageURL} alt={tags} className='detail-image' />
            <Stack
                gap='15px'
            >
                <Stack
                    direction='row'
                    alignItems='center'
                    gap='15px'
                >
                    <img
                        src={userImageURL} alt={user}
                        width='60px'
                        height='60px'
                        id='user-image'
                    />
                    <Typography variant='h6'>
                        {user} / {user_id}
                    </Typography>
                </Stack>
                <hr />
                <Stack direction='row'>
                    <Button
                        className='btn'
                        sx={{ mr: '5px', color: '#fff', background: '#ff2526' }}
                        fontSize='14px'
                        borderRadius='20px'
                        textTransform='capitalize'
                    >
                        {`${likes} 💙`}
                    </Button>
                    <Button
                        className='btn'
                        sx={{ mr: '5px', color: '#fff', background: '#fcc757' }}
                        fontSize='14px'
                        borderRadius='20px'
                        textTransform='capitalize'
                    >
                        {`${comments} 🗨️`}
                    </Button>
                    <Button
                        className='btn'
                        sx={{ mr: '5px', color: ' #fff', background: '#ffa9a9' }}
                        fontSize='14px'
                        borderRadius='20px'
                        textTransform='capitalize'
                    >
                        {`${downloads} ⬇️`}
                    </Button>
                    <Button
                        className='btn'
                        sx={{ color: ' #fff', background: '#fcb651' }}
                        fontSize='14px'
                        borderRadius='20px'
                        textTransform='capitalize'
                    >
                        {`${views} 👁️‍🗨️`}
                    </Button>
                </Stack>
                <hr />
                <a href={`${largeImageURL}?attachment`} download>
                    <Button
                        className='btn'
                        sx={{ color: ' #fff', background: '#02be6e' }}
                        fontSize='14px'
                        borderRadius='20px'
                        textTransform='capitalize'
                    >
                        ⬇️ Donwload
                    </Button>
                </a>
            </Stack>
        </Stack>
    )
}

export default Details