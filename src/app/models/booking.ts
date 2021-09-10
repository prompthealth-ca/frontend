import { Professional } from "./professional";
import { IUserDetail } from "./user-detail";

export interface IBooking {
  bookingDateTime?: string | Date;
  createdAt?: string | Date;
  customerId?: IUserDetail,
  drId?: IUserDetail,
  email?: string;
  name?: string;
  note?: string;
  phone?: string;
  status?: number;

  practitioner?: Professional;
  patientName?: string;
  patientEmail?: string;
  patientPhone?: string;
  patientNote?: string;
}

export class Booking implements IBooking {
  
  get bookingDateTime():Date { return new Date(this.data.bookingDateTime); }

  get practitioner(): Professional { return new Professional(this.data.drId._id, this.data.drId); }
  get patientName() { return this.data.name; }
  get patientEmail() { return this.data.email; }
  get patientPhone() { return this.data.phone; }
  get patientNote() { return this.data.note; }
    
  get createdAt(): Date { return new Date(this.data.createdAt); }

  constructor(private data: IBooking) {}
}