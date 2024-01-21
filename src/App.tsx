import React, { useEffect } from 'react';
import './App.css';
import Booking from './app/bookings/booking.page';
import ChatPage from 'src/app/chat/chat.page';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux.hooks';
import { chatSelector } from 'src/app/chat/store/chat.selector';
import { connectToSocket, disconnectFromSocket } from 'src/app/chat/store/chat.actions';
import { AppBar } from '@mui/material';
import ButtonAppBar from './components/button-app-bar.comp';
import { UsersPage } from './app/users/users.page';

function App() {
  const dispatch = useAppDispatch()
  const chat = useAppSelector(chatSelector)
  const tokens = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmbXdxbWZkaXNvY21hc2xzc25mIiwicm9sZSI6InNhbGVzIiwibmFtZSI6IlBhdHJpY2sgQWRhbXMiLCJpYXQiOjE1MTYyMzkwMjJ9.r23K_FgZqNkl6T4aAOS_Rw8GJkHL8wzRZ2M3-5Svy7k',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmbXdxbWZkaXNvY21hc2xuc2RmIiwicm9sZSI6InNhbGVzIiwibmFtZSI6IkpvaG4gSm9uZXMiLCJpYXQiOjE1MTYyMzkwMjJ9.70A5xTwvkxdEfR2W1wsTmay4mPqH6DAOaCZJEEiMR9A',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmbXdxbWZkaXNvY21hc2xuZGRzZiIsInJvbGUiOiJzYWxlcyIsIm5hbWUiOiJTYWxlcyBTYWxlcyIsImlhdCI6MTUxNjIzOTAyMn0.-YWYHvc-gO2UO0QlRecFCQjj3QCgJ953ipgdMFQJZkc'
  ]
  useEffect(() => {
    dispatch(connectToSocket(tokens[Math.floor(Math.random()*tokens.length)]))
    return () => {
      if (chat.connected === true) {
        dispatch(disconnectFromSocket());
      }
    };
  }, [dispatch])

  return (
    <>
      {/* <ButtonAppBar/>
      <ChatPage/> */}
      <UsersPage />
    </>
    
  );
}

export default App;
