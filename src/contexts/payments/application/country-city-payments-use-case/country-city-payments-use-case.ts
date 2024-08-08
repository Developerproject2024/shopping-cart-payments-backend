import { Injectable } from '../../../shared/dependency-injection/injectable';
import { ICountryCity } from '../../domain/country-city';
import { CountryCityPaymentsRepository } from '../../domain/country-city.repository';

@Injectable()
export class CountryCityPaymentUseCase {
  constructor(
    private readonly countryCityPaymentsRepository: CountryCityPaymentsRepository,
  ) {}

  async execute(): Promise<{ countryCities: ICountryCity[] }> {
    const countryCity = await this.countryCityPaymentsRepository.findAll();

    return { countryCities: countryCity };
  }
}
