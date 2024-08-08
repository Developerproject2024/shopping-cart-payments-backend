import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  ApiHeader,
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiKeyInterceptor } from 'src/contexts/interceptor/api-key.interceptor';
import { ProductsPaymentUseCase } from 'src/contexts/payments/application/products-payment-use-case/products-payment-use-case';

@Controller('transactions')
@ApiTags('Transacciones')
export class TransactionsController {
  constructor(private productsPaymentUseCase: ProductsPaymentUseCase) {}

  @Get()
  @UseInterceptors(ApiKeyInterceptor)
  @ApiHeader({
    name: 'api-key',
    description: '',
    required: true,
    schema: {
      type: 'string',
    },
  })
  @ApiProduces('application/json')
  @ApiOperation({
    summary: 'realizar proceso de pagos',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'Listado de transacciones.',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async run() {
    return this.productsPaymentUseCase.execute();
  }
}
