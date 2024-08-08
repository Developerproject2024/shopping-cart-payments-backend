export interface ICountryCity {
  cityId: number;
  cityName: string;
  country: ICountry;
}

export interface ICountry {
  countryId: number;
  countryName: string;
}

export class CountryCity {
  constructor() {}

  toValue(countryCities: ICountryCity[]) {
    return countryCities.map((countryCity) => ({
      cityId: countryCity.cityId,
      cityName: countryCity.cityName,
      country: countryCity.country,
    }));
  }
}
