import { Module } from '@nestjs/common';
import { CreatePaymentUseCase } from '../application/create-payment-use-case/create-payment-use-case';
import { InMemoryPaymentRepository } from './repositories/in-memory.payment-repository';
import { PaymentRepository } from '../domain/payment.repository';
import { FindPaymentByIdUseCase } from '../application/find-payment-by-id-use-case/find-payment-by-id.use-case';
import { SharedModule } from '../../shared/shared.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './database/entities/category.entity';
import { ProductEntity } from './database/entities/products.entity';
import { CustomerEntity } from './database/entities/customer.entity';
import { DeliveryEntity } from './database/entities/deliveries.entity';
import { StockEntity } from './database/entities/stocks.entity';
import { TransactionEntity } from './database/entities/transactions.entity';
import { ProductsPaymentController } from './http-api/products-payment/products-payment.controller';
import { ProductsPaymentUseCase } from '../application/products-payment-use-case/products-payment-use-case';
import { ProductsPaymentsRepository } from '../domain/products-payment.repository';
import { ProductsRepository } from './repositories/products-repository';
import { CountryEntity } from './database/entities/country';
import { CityEntity } from './database/entities/city.entity';
import { CountryCityPaymentController } from './http-api/country-city-payments/country-city-payments';
import { CountryCityPaymentUseCase } from '../application/country-city-payments-use-case/country-city-payments-use-case';
import { CountryCityPaymentsRepository } from '../domain/country-city.repository';
import { CountryCityRepository } from './repositories/country-city-repository';
import { TransactionsController } from './http-api/transactions/transactions.controller';

@Module({
  imports: [
    SharedModule,
    DatabaseModule,
    TypeOrmModule.forFeature([
      ProductEntity,
      CustomerEntity,
      DeliveryEntity,
      StockEntity,
      TransactionEntity,
      CategoryEntity,
      CountryEntity,
      CityEntity,
    ]),
  ],
  controllers: [
    ProductsPaymentController,
    CountryCityPaymentController,
    TransactionsController,
  ],
  providers: [
    CreatePaymentUseCase,
    FindPaymentByIdUseCase,
    ProductsPaymentUseCase,
    CountryCityPaymentUseCase,
    InMemoryPaymentRepository,
    ProductsRepository,
    CountryCityRepository,

    {
      provide: PaymentRepository,
      useExisting: InMemoryPaymentRepository,
    },
    {
      provide: ProductsPaymentsRepository,
      useExisting: ProductsRepository,
    },
    {
      provide: CountryCityPaymentsRepository,
      useExisting: CountryCityRepository,
    },
  ],
  exports: [
    CreatePaymentUseCase,
    FindPaymentByIdUseCase,
    ProductsPaymentUseCase,
    CountryCityPaymentUseCase,
  ],
})
export class PaymentModule {}
