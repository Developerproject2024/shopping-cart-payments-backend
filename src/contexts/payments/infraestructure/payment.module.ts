import { Module } from '@nestjs/common';
import { CreatePaymentController } from './http-api/create-payment/create-payment.controller';
import { CreatePaymentUseCase } from '../application/create-payment-use-case/create-payment-use-case';
import { InMemoryPaymentRepository } from './repositories/in-memory.payment-repository';
import { PaymentRepository } from '../domain/payment.repository';
import { FindPaymentByIdController } from './http-api/find-payment-by-id/find-payment-by-id.controller';
import { FindPaymentByIdUseCase } from '../application/find-payment-by-id-use-case/find-payment-by-id.use-case';
import { SharedModule } from '../../shared/shared.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './database/entities/category.entity';

@Module({
  imports: [
    SharedModule,
    DatabaseModule,
    TypeOrmModule.forFeature([CategoryEntity]),
  ],
  controllers: [CreatePaymentController, FindPaymentByIdController],
  providers: [
    CreatePaymentUseCase,
    FindPaymentByIdUseCase,
    InMemoryPaymentRepository,
    {
      provide: PaymentRepository,
      useExisting: InMemoryPaymentRepository,
    },
  ],
  exports: [CreatePaymentUseCase, FindPaymentByIdUseCase],
})
export class PaymentModule {}
