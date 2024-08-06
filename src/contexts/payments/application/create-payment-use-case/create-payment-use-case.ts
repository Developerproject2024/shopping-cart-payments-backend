import { Injectable } from '../../../shared/dependency-injection/injectable';
import { IPayment, Payment } from '../../domain/paymen';
import { PaymentRepository } from '../../domain/payment.repository';
import { CreatePaymentDto } from './create-payment.dto';

@Injectable()
export class CreatePaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: CreatePaymentDto): Promise<{ payment: IPayment }> {
    const payment = Payment.create(dto);

    await this.paymentRepository.create(payment);

    return {
      payment: payment.toValue(),
    };
  }
}
