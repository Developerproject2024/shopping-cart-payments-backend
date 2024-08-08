import { ICountryCity } from './country-city';
export abstract class CountryCityPaymentsRepository {
  abstract findAll(): Promise<ICountryCity[]>;
}
