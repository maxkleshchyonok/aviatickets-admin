import React from 'react'
import MessageForm from 'src/app/chat/components/MessageInput/message-input.comp'
import MessageList from 'src/app/chat/components/MessageList/message-list.comp'
import { styled, Stack } from '@mui/material'


type Props = {}


export default function ChatMessage({}: Props) {
  return (
    <>
        <MessageList/>
        <MessageForm/>
    </>
  )
}