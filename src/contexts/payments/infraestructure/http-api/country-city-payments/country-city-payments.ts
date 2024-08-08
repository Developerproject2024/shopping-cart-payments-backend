import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  ApiHeader,
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiKeyInterceptor } from 'src/contexts/interceptor/api-key.interceptor';
import { CountryCityPaymentUseCase } from 'src/contexts/payments/application/country-city-payments-use-case/country-city-payments-use-case';

@Controller('country-cities')
@ApiTags('Country - Cities')
export class CountryCityPaymentController {
  constructor(private countryCityPaymentUseCase: CountryCityPaymentUseCase) {}

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
    summary: 'Consultar la ciudades de Colombia y sus Departamentos Asociados',
  })
  @ApiProduces('application/json')
  @ApiResponse({
    status: 200,
    description: 'Listado de departamentos y ciudades de colombia.',
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
    return this.countryCityPaymentUseCase.execute();
  }
}
