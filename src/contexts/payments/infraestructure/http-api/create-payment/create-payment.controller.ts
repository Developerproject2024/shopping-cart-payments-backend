import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentUseCase } from 'src/contexts/payments/application/create-payment-use-case/create-payment-use-case';
import { CreatePaymentHttpDto } from './create-payment.http-dto';
import { IPayment } from 'src/contexts/payments/domain/paymen';

@Controller('payments')
export class CreatePaymentController {
  constructor(private createPaymentUseCase: CreatePaymentUseCase) {}

  @Post()
  async run(
    @Body() createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<{ payment: IPayment }> {
    return await this.createPaymentUseCase.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    });
  }
}
