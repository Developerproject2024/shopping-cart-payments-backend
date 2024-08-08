import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StockEntity } from './stocks.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 0 })
  price: number;

  @Column({ type: 'text', nullable: true })
  image: string;

  @OneToMany(() => StockEntity, (stock) => stock.product)
  stocks: StockEntity[];
}
