import { styled } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Container = styled('div')({
  backgroundColor: 'lightblue',
  padding: '5px',
  width: '40%',
  height: 'auto',
  borderRadius: '10px'
})

const Cont = styled('div')({
  
})

export default function MessageItem({}: Props) {
  return (
    <Container>
      <Typography>  dkalsmdmdskadm adspkadokasd kasMessag gemsdkalsmdkalsmdmdskad madspkadokasdkasMessage gemsdkalsmdkalsmdmdskadma dspkadokasdkasMessagee</Typography>
    </Container> 
  )
}