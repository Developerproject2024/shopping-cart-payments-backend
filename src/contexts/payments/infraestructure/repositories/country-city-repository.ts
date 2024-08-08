import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from '../database/entities/city.entity';
import { CountryCityPaymentsRepository } from '../../domain/country-city.repository';
import { CountryCity, ICountryCity } from '../../domain/country-city';

export class CountryCityRepository extends CountryCityPaymentsRepository {
  constructor(
    @InjectRepository(CityEntity)
    private readonly repository: Repository<CityEntity>,
  ) {
    super();
  }

  async findAll(): Promise<ICountryCity[] | []> {
    const countryCities = new CountryCity();
    const countryCity = await this.repository.find({ relations: ['country'] });

    return countryCity ? countryCities.toValue(countryCity) : [];
  }
}
