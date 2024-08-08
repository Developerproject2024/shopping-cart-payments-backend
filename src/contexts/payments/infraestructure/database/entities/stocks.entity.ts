import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ProductEntity } from './products.entity';
import { TransactionEntity } from './transactions.entity';

@Entity('stocks')
export class StockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, (product) => product.stocks)
  product: ProductEntity;

  @Column({ type: 'integer' })
  quantity: number;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.stock)
  transactions: TransactionEntity[];
}
