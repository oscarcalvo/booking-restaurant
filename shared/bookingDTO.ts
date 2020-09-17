import { CustomerDTO } from "./customerDTO";
import { BookingStateTypes } from "./utils/bookingStateTypes";

export class BookingDTO {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  restaurantId: number;
  locationId: number;
  customerId: number;
  customer: CustomerDTO;
  bookingServiceZoneId: number;
  date: Date;
  seats: number;
  state: BookingStateTypes;
  comments: string;
  secondId: string;

  static Map(booking: BookingDTO): BookingDTO {
    let target = new BookingDTO();
    let result: BookingDTO = Object.assign(target, booking);
    return result;
  }
}
