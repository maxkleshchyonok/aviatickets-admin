import { ChatState } from "src/app/chat/types/chat.state";
import { createSlice } from "@reduxjs/toolkit";
import { connectToSocket, disconnectFromSocket, recieveMessage } from "src/app/chat/store/chat.actions";

const initialState: ChatState = {
    awaitingClients: [],
    takenClients: [],
    connected: false,
    messages: [],
    selectedClient: null
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers:{
        saveTakenClients(state, {payload}) {
            state.takenClients.push(payload.takenClients)
        }, 
        addTakenClient(state, {payload}) {
            state.takenClients.push(payload.takenClient)
        },
        saveAwaitingClients(state, {payload}) {
            state.awaitingClients = payload.awaitingClients
        },
        addAwaitingClient(state, {payload}) {
            state.awaitingClients.push(payload.awaitingClient)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(connectToSocket.fulfilled, (state) => {
            state.connected = true
        })
        builder.addCase(connectToSocket.rejected, (state) => {
            state.connected = false
        })
        builder.addCase(connectToSocket.pending, (state) => {
            state.connected = false
        })
        builder.addCase(disconnectFromSocket.fulfilled, (state) => {
            state.connected = false
        })
        builder.addCase(disconnectFromSocket.rejected, (state) => {
            state.connected = true
        })
        builder.addCase(disconnectFromSocket.pending, (state) => {
            state.connected = true
        })
    }
})

export const {saveTakenClients, saveAwaitingClients, addAwaitingClient, addTakenClient} = chatSlice.actions

export default chatSlice.reducer