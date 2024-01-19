import { styled } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import UserList from 'src/app/chat/components/UserList/user-list.comp';

type Props = {}

const Container = styled('div')({
  flex: '0.2 0 auto',
  maxHeight: '100%',
  overflow: 'auto',
  minWidth: '0',
  gridArea: 'aside',
  borderRight: '1px solid #ededed'
})

export default function ChatAside({}: Props) {
  return (
    <Container>
        <UserList/> 
    </Container>
  )
}