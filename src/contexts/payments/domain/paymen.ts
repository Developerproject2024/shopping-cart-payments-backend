import { v4 as uuidv4 } from 'uuid';

export interface IPayment {
  id: string;
  amount: number;
  customerId: string;
}

export class Payment {
  constructor(private atrributes: IPayment) {}
  static create(createPayment: {
    amount: number;
    customerId: string;
  }): Payment {
    return new Payment({
      id: uuidv4(),
      amount: createPayment.amount,
      customerId: createPayment.customerId,
    });
  }
  toValue(): IPayment {
    return {
      id: this.atrributes.id,
      amount: this.atrributes.amount,
      customerId: this.atrributes.customerId,
    };
  }
}
