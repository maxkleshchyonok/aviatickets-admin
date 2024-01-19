import { Client } from "src/app/chat/types/client"
import { Message } from "src/aviatickets-submodule/libs/socket/types/message"

export type ChatState = {
    awaitingClients: Client[]
    takenClients: Client[]
    connected: boolean
    messages: Message[]
    selectedClient: Client | null
}