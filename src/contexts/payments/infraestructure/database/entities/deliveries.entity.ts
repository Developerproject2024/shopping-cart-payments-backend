import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { TransactionEntity } from './transactions.entity';

@Entity('deliveries')
export class DeliveryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TransactionEntity, (transaction) => transaction.delivery)
  transaction: TransactionEntity;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  deliveryStatus: string; // Ejemplo: 'Pending', 'Shipped', 'Delivered'

  @CreateDateColumn()
  deliveryDate: Date;
}
