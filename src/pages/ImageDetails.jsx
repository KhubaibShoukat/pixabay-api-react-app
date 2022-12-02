import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Stack } from '@mui/material'

import { fetchApiData } from '../utils/fetchApiData'
import Details from '../components/Details'

const ImageDetails = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiUrl = 'https://pixabay.com/api'
    const apiKey = '15997785-146e8dcc17137d31dd25b4943'
    const handleSearch = async () => {
      const imagesData = await fetchApiData(`${apiUrl}/?key=${apiKey}&id=${id}`)
      setDetail(imagesData.hits[0])
      setLoading(false)
    }
    handleSearch()
  }, [id])

  return (
    <Box>
      {loading ? <Stack justifyContent="center" alignItems='center'><CircularProgress /> </Stack> : <Details detail={detail} />}
    </Box>
  )
}

export default ImageDetails