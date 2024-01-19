import { Typography } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material'

type Props = {}

const Box = styled('div')({
    borderRadius: '10px',
    padding: '20px',
    "&:hover" : {
        backgroundColor: "#f0f0f5",
    }
})

export default function UserItem({}: Props) {
  return (
    <Box>
       <Typography>Client Client</Typography>
    </Box>
  )
}