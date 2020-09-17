import { BookingDTO } from "./bookingDTO";
import { BookingServiceDTO } from "./bookingServiceDTO";
import { BookingServiceZoneDTO } from "./bookingServiceZoneDTO";
import { BookingServiceZoneTableDTO } from "./bookingServiceZoneTableDTO";
import { DayOfWeek } from "./utils/dayOfWeek";

class BookingManager {
  createDummyBookingService(): BookingServiceDTO {
    let bookingService = new BookingServiceDTO();
    bookingService.from = new Date(2010, 1, 1);
    bookingService.to = new Date(2030, 1, 1);
    bookingService.daysOfWeekValid = [
      DayOfWeek.Sunday,
      DayOfWeek.Monday,
      DayOfWeek.Tuesday,
      DayOfWeek.Wednesday,
      DayOfWeek.Thursday,
      DayOfWeek.Friday,
      DayOfWeek.Saturday,
    ];
    bookingService.isEnabled = true;
    bookingService.restaurantId = 1;
    bookingService.locationId = 1;
    bookingService.createdAt = new Date();
    bookingService.updatedAt = new Date();
    bookingService.isDeleted = false;
    bookingService.durationPerTableMinutes = 90;
    bookingService.intervalMinutesBooking = 15;
    bookingService.startHour = 21;
    bookingService.startMinutes = 0;
    bookingService.endHour = 23;
    bookingService.endMinutes = 50;
    bookingService.latestBookingMinutesBefore = 15;

    let bookingServiceZone = new BookingServiceZoneDTO();
    bookingServiceZone.createdAt = new Date();
    bookingServiceZone.updatedAt = new Date();
    bookingServiceZone.bookingServiceId = bookingService.id;
    bookingServiceZone.isEnabled = true;
    bookingServiceZone.name = "Dinning room";
    bookingService.serviceZones.push(bookingServiceZone);

    let bookingServiceZoneTable = new BookingServiceZoneTableDTO();
    bookingServiceZoneTable.createdAt = new Date();
    bookingServiceZoneTable.updatedAt = new Date();
    bookingServiceZoneTable.bookingServiceZoneId = bookingServiceZone.id;
    bookingServiceZoneTable.isEnabled = true;
    bookingServiceZoneTable.numTablesAvailable = 12;
    bookingServiceZoneTable.numSeatsAvailablePerTable = 4;
    bookingServiceZone.zoneTables.push(bookingServiceZoneTable);

    return bookingService;
  }
  async saveDummyBooking(booking: BookingDTO): Promise<boolean> {
    return true;
  }
}

export const bookingManager = new BookingManager();
