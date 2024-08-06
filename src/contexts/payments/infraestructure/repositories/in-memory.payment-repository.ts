import { IPayment, Payment } from '../../domain/paymen';
import { PaymentRepository } from '../../domain/payment.repository';

export class InMemoryPaymentRepository extends PaymentRepository {
  private payments: IPayment[] = [];

  async create(payment: Payment): Promise<void> {
    this.payments.push(payment.toValue());
  }

  async getById(id: string): Promise<Payment | null> {
    const payment = this.payments.find((payment) => payment.id === id);
    return payment ? new Payment(payment) : null;
  }
}
