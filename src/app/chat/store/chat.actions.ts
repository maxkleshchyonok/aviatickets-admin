import { Message } from 'src/aviatickets-submodule/libs/socket/types/message';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { socketClient } from 'src/index';
import { Client } from 'src/app/chat/types/client';

export const connectToSocket = createAsyncThunk('connectToSocket', async function (token: string) {
  return await socketClient.connect(token)
})

export const disconnectFromSocket = createAsyncThunk('disconnectFromSocket', async function () {
  return await socketClient.disconnect()
})

export const sendMessage = createAsyncThunk('sendMessage', async function (message: Message) {
  return await socketClient.emit('sendMessage', message)
}) 

export const getAwaitingClients = createAsyncThunk('getAwaitingClients', async function (_, {dispatch}) {
    return await socketClient.on('awaitingClients', (clients: Client[]) => {
        dispatch({type: 'chat/saveAwaititngClients', payload: {awaitingClients: clients}})
    })
}) 

export const addAwaitingClient = createAsyncThunk('addAwaitingClient', async function (_, {dispatch}) {
    return await socketClient.on('newClient', (client: Client) => {
        dispatch({type: 'chat/addAwaititngClient', payload: {awaitingClient: client}})
    })
}) 

export const recieveMessage = createAsyncThunk('recieveMessage', async function (_, {getState, dispatch}) {
  return await socketClient.on('newMessage', (receivedMessage: Message) => {
    console.log(receivedMessage + "AAAA")
    dispatch({type: 'chat/saveRecievedMessage', payload: {message: receivedMessage}})
  }
    
  )
})