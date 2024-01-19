import React from 'react'
import UserItem from 'src/app/chat/components/UserList/UserItem/user-item.comp'
import { Paper, styled, List } from '@mui/material'


type Props = {}

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: '0.8',

  })

export default function UserList({}: Props) {
  return (
            <List>
                {Array.from({length: 20 }).map((_, index) => <UserItem key={index}/>)}
            </List>
  )
}