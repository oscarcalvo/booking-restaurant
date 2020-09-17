import { BookingDTO } from "./bookingDTO";
import { BookingServiceZoneTableDTO } from "./bookingServiceZoneTableDTO";

export class BookingServiceZoneDTO {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  bookingServiceId: number;
  isEnabled: boolean;
  name: string;

  zoneTables: BookingServiceZoneTableDTO[];
  bookings: Array<BookingDTO>;

  constructor() {
    this.zoneTables = new Array<BookingServiceZoneTableDTO>();
    this.bookings = new Array<BookingDTO>();
  }

  public isAvailableOnDate(
    date: Date,
    seats: number,
    durationPerTableMinutes: number
  ): boolean {
    let bookings = this.getBookingsOnDate(date, durationPerTableMinutes);
    let totalBookedSeats = bookings.sumBy((x) => x.seats);
    let availableSeats = this.getTotalSeats();
    return (
      this.existTableAvailable(date, durationPerTableMinutes) &&
      totalBookedSeats + seats <= availableSeats
    );
  }

  getTotalTables(): number {
    let totalTables = 0;
    this.zoneTables.forEach((x) => (totalTables += x.numTablesAvailable));
    return totalTables;
  }
  getTotalSeats(): number {
    let totalSeats = 0;
    this.zoneTables.forEach(
      (x) => (totalSeats += x.numTablesAvailable * x.numSeatsAvailablePerTable)
    );
    return totalSeats;
  }
  existTableAvailable(date: Date, durationPerTableMinutes: number): boolean {
    let bookings = this.getBookingsOnDate(date, durationPerTableMinutes);
    let totalBookedSeats = bookings.sumBy((x) => x.seats);
    let totalSeats = this.getTotalSeats();
    let totalTables = this.getTotalTables();
    return (
      bookings.length < totalTables &&
      this.zoneTables.find(
        (x) =>
          x.numTablesAvailable > 0 &&
          totalSeats - totalBookedSeats >= x.numSeatsAvailablePerTable
      ) != null
    );
  }
  getBookingsOnDate(
    date: Date,
    durationPerTableMinutes: number
  ): Array<BookingDTO> {
    //aquí no estás controlando si hay alguna reserva después...es decir si te preguntan por las 21:45 y no hay reserva pero si tienes una a las 21:55..
    let resp = new Array<BookingDTO>();

    for (let booking of this.bookings) {
      if (
        (booking.date <= date &&
          booking.date.addMinutes(durationPerTableMinutes) > date) ||
        (booking.date > date &&
          date.addMinutes(durationPerTableMinutes) > booking.date) ||
        (durationPerTableMinutes == null &&
          booking.date.withoutTime().toUTCString() ===
            date.withoutTime().toUTCString())
      ) {
        resp.push(booking);
      }
    }
    return resp;
  }
}
