import { Injectable } from 'src/contexts/shared/dependency-injection/injectable';
import { IPayment } from '../../domain/paymen';
import { PaymentNotFoundException } from '../../domain/payment-not-found.exception';
import { PaymentRepository } from '../../domain/payment.repository';
import { FindPaymentByIdDto } from './find-payment-by-id.dto';

@Injectable()
export class FindPaymentByIdUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(
    findPaymentByIdDto: FindPaymentByIdDto,
  ): Promise<{ payment: IPayment }> {
    const payment = await this.paymentRepository.getById(findPaymentByIdDto.id);

    if (!payment) {
      throw new PaymentNotFoundException(findPaymentByIdDto.id);
    }

    return {
      payment: payment.toValue(),
    };
  }
}
