import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { StockEntity } from './stocks.entity';
import { DeliveryEntity } from './deliveries.entity';

@Entity('transactions')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerEntity, (customer) => customer.transactions)
  customer: CustomerEntity;

  @ManyToOne(() => StockEntity, (stock) => stock.transactions)
  stock: StockEntity;

  @Column({ type: 'integer' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => DeliveryEntity, (delivery) => delivery.transaction)
  delivery: DeliveryEntity;
}
