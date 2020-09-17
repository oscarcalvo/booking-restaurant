import { CustomerDTO } from "./customerDTO";
import { utils } from "./utils/utils";
export class CustomerAddressDTO {
  id?: number;
  streetName: string;
  streetNumber: string;
  floorDoor: string;
  zipCode: string;
  locality: string;
  province: string;
  createdAt: Date;
  customer: CustomerDTO;
  customerId: number;

  constructor() {
    this.customer = new CustomerDTO();
  }
  public sanitize(): void {
    this.streetName = utils.sanitizeString(this.streetName, false);
    this.streetNumber = utils.sanitizeString(this.streetNumber, false);
    this.floorDoor = utils.sanitizeString(this.floorDoor, false);
    this.locality = utils.sanitizeString(this.locality, false);
    this.province = utils.sanitizeString(this.province, false);
    this.zipCode = utils.sanitizeString(this.zipCode);
  }
  getBasicFormmatedAddress(): string {
    return `${this.streetName} ${this.streetNumber} ${this.floorDoor} ${this.locality}`;
  }
}
