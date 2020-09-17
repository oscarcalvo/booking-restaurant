import { Component, OnInit } from "@angular/core";
import { bookingManager } from "../../../shared/bookingManager";
import { BookingServiceDTO } from "../../../shared/bookingServiceDTO";

@Component({
  selector: "app-restaurant-booking",
  templateUrl: "./restaurant-booking.component.html",
  styleUrls: ["./restaurant-booking.component.scss"],
})
export class RestaurantBookingComponent implements OnInit {
  bookingService: BookingServiceDTO = null;

  constructor() {}

  ngOnInit() {
    this.createBookingService();
  }
  private createBookingService() {
    this.bookingService = bookingManager.createDummyBookingService();
  }
}
