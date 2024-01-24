import React from "react";
import ChatAside from "./components/chat-aside.comp";
import ChatMessage from "./components/chat-message.comp";
import ChatInput from "./components/MessageInput/message-input.comp";
import { styled, Stack } from "@mui/material";
import Header from "components/header.comp";

type Props = {};

const MainStack = styled("div")({
  display: "grid",
  gridTemplateAreas: `'aside list'
  'aside form'`,
  gridTemplateColumns: "1fr 4fr",
  gridTemplateRows: "4fr 0.5fr",
  height: "calc(100dvh - 64px)",
});

export default function ChatPage({}: Props) {
  return (
    <>
      <Header />
      <MainStack>
        <ChatAside />
        <ChatMessage />
      </MainStack>
    </>
  );
}
