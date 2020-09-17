import { BookingServiceZoneDTO } from "./bookingServiceZoneDTO";
import { BookingAvailabity } from "./utils/bookingAvailability";
import { DayOfWeek } from "./utils/dayOfWeek";
import "./utils/generalExtensions";

export class BookingServiceDTO {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  restaurantId: number;
  locationId: number;
  from: Date;
  to: Date;
  daysOfWeekValid: Array<DayOfWeek>;
  isEnabled: boolean;
  isDeleted: boolean;
  durationPerTableMinutes: number;
  intervalMinutesBooking: number;
  startHour: number;
  startMinutes: number;
  endHour: number;
  endMinutes: number;
  latestBookingMinutesBefore: number;

  serviceZones: BookingServiceZoneDTO[];
  constructor() {
    this.serviceZones = new Array<BookingServiceZoneDTO>();
  }

  static Map(bookingService: BookingServiceDTO): BookingServiceDTO {
    let target = new BookingServiceDTO();
    let result: BookingServiceDTO = Object.assign(target, bookingService);
    return result;
  }

  getAvailability(seats: number, date: Date): Array<BookingAvailabity> {
    let resp = new Array<BookingAvailabity>();
    let startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      this.startHour,
      this.startMinutes
    );
    let endDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      this.endHour,
      this.endMinutes
    ); //todooscar ten previsto que puede terminar el servicio al día siguiente (por ejemplo a la 1 de la mañana);
    while (
      startDate <= endDate.addMinutes(this.latestBookingMinutesBefore * -1)
    ) {
      for (let zone of this.serviceZones) {
        if (
          zone.isAvailableOnDate(startDate, seats, this.durationPerTableMinutes)
        ) {
          resp.push(new BookingAvailabity(startDate, zone.id, zone.name));
        }
      }
      startDate = startDate.addMinutes(this.intervalMinutesBooking);
    }

    return resp;
  }
}
