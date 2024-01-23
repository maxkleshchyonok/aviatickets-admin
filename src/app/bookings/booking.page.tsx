import React from "react";
import BookingTable from "./components/booking-table.comp";
import { useAppSelector } from "src/hooks/redux.hooks";
import { bookingsSelector } from "src/app/bookings/store/bookings.selector";

type Props = {};

export default function Booking({}: Props) {

  return <BookingTable />;
}
