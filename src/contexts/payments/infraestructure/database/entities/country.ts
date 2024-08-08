import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { CityEntity } from './city.entity';

@Entity({ name: 'country' })
export class CountryEntity {
  @PrimaryColumn({ type: 'int', name: 'country_id' })
  countryId: number;
  @Column({ name: 'country_name' })
  countryName: string;

  @OneToMany(() => CityEntity, (city) => city.country)
  cities: CityEntity[];
}
