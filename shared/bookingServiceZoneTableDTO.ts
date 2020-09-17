export class BookingServiceZoneTableDTO {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  bookingServiceZoneId: number;
  isEnabled: boolean;
  numTablesAvailable: number;
  numSeatsAvailablePerTable: number;
}
