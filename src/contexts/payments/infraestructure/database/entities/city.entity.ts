import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { CountryEntity } from './country';

@Entity({ name: 'city' })
export class CityEntity {
  @PrimaryColumn({ type: 'int', name: 'city_id' })
  cityId: number;

  @Column({ name: 'city_name' })
  cityName: string;

  @ManyToOne(() => CountryEntity, (country) => country.cities)
  country: CountryEntity;
}
