import { CustomerAddressDTO } from "./customerAddressDTO";
import { UserBaseDTO } from "./userBaseDTO";
import { utils } from "./utils/utils";

export class CustomerDTO extends UserBaseDTO {
  phoneNumber: string;
  addresses: Array<CustomerAddressDTO>;
  restaurantId: number;
  stripeCustomerId: string;
  latestCreditCardDigits: string;
  name: string;
  stripePublicKey: string;
  whatsAppOptInAskAcceptedDate: Date;
  whatsAppOptInAccepted: boolean;
  cecaExpiration: number;
  cecaToken: string;

  constructor() {
    super();
    this.email = "";
    this.phoneNumber = "";
    this.addresses = new Array<CustomerAddressDTO>();
  }

  addAddress(address: CustomerAddressDTO) {
    this.addresses.push(address);
    address.customer = this;
  }
  sanitize(): void {
    this.email = utils.sanitizeString(this.email);
    this.phoneNumber = utils.sanitizeString(this.phoneNumber);
    this.name = utils.sanitizeString(this.name, false);
  }
}
