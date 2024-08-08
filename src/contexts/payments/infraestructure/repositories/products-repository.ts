import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../database/entities/products.entity';
import { ProductsPaymentsRepository } from '../../domain/products-payment.repository';
import { IProducts, Product } from '../../domain/products';

export class ProductsRepository extends ProductsPaymentsRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {
    super();
  }

  async findAll(): Promise<IProducts[] | []> {
    const productss = new Product();
    const products = await this.repository.find({ relations: ['stocks'] });
    console.log(products);
    return products ? productss.toValue(products) : [];
  }
}
