import { styled, List, ListItem } from '@mui/material'
import React from 'react'
import MessageItem from 'src/app/chat/components/MessageList/MessageItem/message-item.comp'

type Props = {}

const Container = styled('div')({
  display: 'flex',
  overflowY: 'scroll',
  overflowX: 'hidden',
  width: '100%',
  gridArea: 'list',
  
})

const CustomList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '1em 1em',
  width: '100%',
  margin: '0 auto',
  maxWidth: '80%',
})

export default function MessageList({}: Props) {
  return (
    <Container>
      <CustomList>
        {Array.from({length: 20}).map((_, index) => <MessageItem key={index}/>)}
      </CustomList>
    </Container>
    
  )
}