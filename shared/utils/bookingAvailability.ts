export class BookingAvailabity {
  constructor(date: Date, zoneId: number, zoneName: string) {
    this.date = date;
    this.zoneId = zoneId;
    this.zoneName = zoneName;
  }
  date: Date;
  zoneId: number;
  zoneName: string;
}
