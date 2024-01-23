import { BaseState } from "src/aviatickets-submodule/libs/types/base.state";
import { BookingDto } from "src/aviatickets-submodule/libs/types/booking.dto";

export interface BookingsState extends BaseState {
  count: number;
  bookings: BookingDto[];
}
