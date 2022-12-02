import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { fetchApiData } from '../utils/fetchApiData'

import Banner from '../assets/images/banner.jpg'

const HeroBanner = ({ setImages, setResults }) => {

    const [search, setSearch] = useState('')
    const apiUrl = 'https://pixabay.com/api'
    const apiKey = '15997785-146e8dcc17137d31dd25b4943'

    const handleSearch = async () => {
        if (search) {
            const imagesData = await fetchApiData(`${apiUrl}/?key=${apiKey}&q=${search}&per_page=200`)
            setImages(imagesData.hits)
            setResults(true)
            const getMeTo = document.getElementById("image");
            getMeTo.scrollIntoView({ behavior: 'smooth' }, false)
        }
    }
    return (
        <Stack
            justifyContent="center"
            alignItems='center'
            width='100%'
            style={{
                backgroundImage: `url(${Banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }}
            sx={{
                height: {
                    lg: '500px', xs: '350px'
                }
            }}
        >
            <Stack
                width='100%'
                maxWidth='850px'
                justifyContent="center"
                p='0 1.5rem'
                spacing={2}
            >

                <Typography
                    variant='h1'
                    fontWeight={800}
                    color='#fff'
                    sx={{ fontSize: { lg: '2em', xs: '1.5em' } }}
                >
                    Stunning free api images using pixabay api
                </Typography>
                <Typography
                    color='#fff'
                >
                    Over 2.7 million+ high quality stock images, videos and music shared by our talented community.
                </Typography>
                {/* Search Bar */}
                <Stack
                    direction='row'
                    spacing={1}
                    mb='72px'
                >
                    <TextField
                        height='75px'
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
                        placeholder='Search Photos'
                        type='text'
                        onKeyDown={e => { (e.key == 'Enter' && handleSearch()) }}
                        sx={{
                            input: {
                                fontWeight: '700',
                                border: 'none',
                                borderRadius: '40px',
                            },
                            width: {
                                lg: '600px', xs: '350px'
                            },
                            backgroundColor: '#fff',
                            borderRadius: '5px',
                            border: 'none'
                        }}
                    />
                    <Button
                        className='search-btn'
                        sx={{
                            bgcolor: '#ff2625',
                            color: '#fff',
                            textTransform: 'none',
                            width: {
                                lg: '175px', xs: '80px'
                            },
                            fontSize: { lg: '20px', xs: '14px' },
                            height: '56px',
                            ml: '5px',
                            postion: 'absolute',
                            right: '0'
                        }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default HeroBanner