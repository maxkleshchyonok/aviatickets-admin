import React from 'react'
import ChatAside from 'src/app/chat/components/chat-aside.comp'
import ChatMessage from 'src/app/chat/components/chat-message.comp'
import ChatInput from 'src/app/chat/components/MessageInput/message-input.comp'
import { styled, Stack} from '@mui/material'

type Props = {}

const MainStack = styled('div')({
  display: 'grid',
  gridTemplateAreas: 
  `'aside list'
  'aside form'`,
  gridTemplateColumns : '1fr 4fr',
  gridTemplateRows: '4fr 0.5fr',
  height: 'calc(100dvh - 64px)'
})

export default function ChatPage({}: Props) {
  return (
    <MainStack>
        <ChatAside/>
        <ChatMessage/>
    </MainStack>
  )
}