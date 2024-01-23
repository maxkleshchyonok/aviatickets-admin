import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "src/aviatickets-submodule/libs/api/axsios.client";
import { BookingsDto } from "src/aviatickets-submodule/libs/types/bookings.dto";
import { BookingDto } from "src/aviatickets-submodule/libs/types/booking.dto";
import { PaginationQueryDto } from "src/aviatickets-submodule/libs/types/pagination-query.dto";

export type CustomError = {
  message: string;
  statusCode: number;
};

export const getAllBookings = createAsyncThunk<
  BookingsDto,
  { query: PaginationQueryDto },
  { rejectValue: CustomError }
>("bookings/getAllBookings", async ({ query }, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get("/bookings/", {
      params: { ...query },
    });
    return response?.data;
  } catch (error) {
    if (axios.isAxiosError<CustomError>(error)) {
      console.log(error);
      return rejectWithValue(error.response?.data!);
    }
    return rejectWithValue({
      message: "Unknown erorr",
      statusCode: 500,
    } as CustomError);
  }
});

export const cancelBooking = createAsyncThunk<
  BookingDto,
  { id: string },
  { rejectValue: CustomError }
>("bookings/cancelBooking", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post(`/bookings/${id}`, {
      status: "Cancelled",
    });
    return response?.data;
  } catch (error) {
    if (axios.isAxiosError<CustomError>(error)) {
      console.log(error);
      return rejectWithValue(error.response?.data!);
    }
    return rejectWithValue({
      message: "Unknown erorr",
      statusCode: 500,
    } as CustomError);
  }
});
