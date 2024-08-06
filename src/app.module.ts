import { Module } from '@nestjs/common';
import { PaymentModule } from './contexts/payments/infraestructure/payment.module';

@Module({
  imports: [PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
