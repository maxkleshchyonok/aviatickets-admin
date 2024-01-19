import React from 'react'
import { IconButton, InputBase, Box, styled, FormControl } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'


type Props = {}

const Container = styled('div')({
  flex: '0.1',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '80%',
  width: '100%',
  height: '100%',
  gridArea: 'form',
  margin: '0 auto'
})

const CustomForm = styled(FormControl)({
  flexDirection: 'row',
  width: '100%',
  gap: '10px'
})

const MessageInput = styled(InputBase)({
  width: '100%',
  borderRadius: '10px', 
  backgroundColor: '#f0f1f2',
  padding: '5px'
})

export default function MessageForm({}: Props) {
  return (  
    <Container>
      <CustomForm>
        <MessageInput placeholder='Message'/>
        <IconButton>
          <SendIcon></SendIcon>
        </IconButton> 
      </CustomForm>
    </Container>
  )
}