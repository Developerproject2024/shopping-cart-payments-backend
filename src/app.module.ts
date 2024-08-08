import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PaymentModule } from './contexts/payments/infraestructure/payment.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApiKeyInterceptor } from './contexts/interceptor/api-key.interceptor';

@Module({
  imports: [PaymentModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ApiKeyInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(consumer);
  }
}
