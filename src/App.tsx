import React, { useEffect } from "react";
import "./App.css";
import Booking from "./app/bookings/booking.page";
import ChatPage from "app/chat/chat.page";
import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";
import { chatSelector } from "app/chat/store/chat.selector";
import {
  connectToSocket,
  disconnectFromSocket,
} from "app/chat/store/chat.actions";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "app.routes";
import ErrorBoundaryComp from "components/error-boundary.comp";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme();

function App() {
  const dispatch = useAppDispatch();
  const chat = useAppSelector(chatSelector);
  const tokens = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmbXdxbWZkaXNvY21hc2xzc25mIiwicm9sZSI6InNhbGVzIiwibmFtZSI6IlBhdHJpY2sgQWRhbXMiLCJpYXQiOjE1MTYyMzkwMjJ9.r23K_FgZqNkl6T4aAOS_Rw8GJkHL8wzRZ2M3-5Svy7k",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmbXdxbWZkaXNvY21hc2xuc2RmIiwicm9sZSI6InNhbGVzIiwibmFtZSI6IkpvaG4gSm9uZXMiLCJpYXQiOjE1MTYyMzkwMjJ9.70A5xTwvkxdEfR2W1wsTmay4mPqH6DAOaCZJEEiMR9A",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmbXdxbWZkaXNvY21hc2xuZGRzZiIsInJvbGUiOiJzYWxlcyIsIm5hbWUiOiJTYWxlcyBTYWxlcyIsImlhdCI6MTUxNjIzOTAyMn0.-YWYHvc-gO2UO0QlRecFCQjj3QCgJ953ipgdMFQJZkc",
  ];
  useEffect(() => {
    dispatch(
      connectToSocket(tokens[Math.floor(Math.random() * tokens.length)])
    );
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRmN2IxNDczLWVjYjctNDJlNC05YTU4LWI3OGIzNTc5ZTBlYyIsImRldmljZUlkIjoiNjBhNzY4YzYtOWU0NS00NzNkLWJlMjgtNDUxYjJhODUzODYyIiwicm9sZUlkIjoiMjE2ZmZiYTgtNDBjNi00NWY2LTg2MWUtMTY5YzU3ZDVkZDQ3Iiwicm9sZVR5cGUiOiJVc2VyIiwicGVybWlzc2lvbnMiOlsiQWxsIl0sImlhdCI6MTcwNTkzMjc3NywiZXhwIjoxNzA2MDE5MTc3fQ.Itt-n-Y1IHWisVbjarKbitf0xcZ0yBKZSp1QYgvGecw"
    );
    return () => {
      if (chat.connected === true) {
        dispatch(disconnectFromSocket());
      }
    };
  }, [dispatch]);

  return (
    <ErrorBoundaryComp>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider
          maxSnack={5}
          autoHideDuration={5000}
          style={{ fontSize: "16px" }}
        >
          <ThemeProvider theme={theme}>
            <Router>
              <AppRoutes />
            </Router>
          </ThemeProvider>
        </SnackbarProvider>
      </LocalizationProvider>
    </ErrorBoundaryComp>
  );
}

export default App;
