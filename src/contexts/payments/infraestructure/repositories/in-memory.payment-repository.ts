import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPayment, Payment } from '../../domain/paymen';
import { PaymentRepository } from '../../domain/payment.repository';
import { CategoryEntity } from '../database/entities/category.entity';

export class InMemoryPaymentRepository extends PaymentRepository {
  private payments: IPayment[] = [];
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {
    super();
  }

  async create(payment: Payment): Promise<void> {
    const f = {
      categoryId: 1,
      categoryName: 'fabio',
      description: 'hola',
      picture: 'http',
    };
    console.log('entroo', f);
    this.payments.push(payment.toValue());

    const userEntity = this.repository.create(f);
    const a = await this.repository.save(userEntity);
    console.log('a====', a);
    payment.toValue();
  }

  async getById(id: string): Promise<Payment | null> {
    const payment = this.payments.find((payment) => payment.id === id);
    return payment ? new Payment(payment) : null;
  }
}
