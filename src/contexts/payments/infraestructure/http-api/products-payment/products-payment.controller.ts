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

@Controller('products')
@ApiTags('Productos')
export class ProductsPaymentController {
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
  @ApiOperation({
    summary: 'Consultar todos los productos con stock disponibles',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'Listado de productos.',
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
