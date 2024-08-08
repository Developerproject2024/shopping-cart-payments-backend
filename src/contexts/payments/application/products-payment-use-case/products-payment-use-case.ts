import { Injectable } from '../../../shared/dependency-injection/injectable';
import { IProducts } from '../../domain/products';
import { ProductsPaymentsRepository } from '../../domain/products-payment.repository';

@Injectable()
export class ProductsPaymentUseCase {
  constructor(
    private readonly productsPaymentRepository: ProductsPaymentsRepository,
  ) {}

  async execute(): Promise<{ products: IProducts[] }> {
    console.log('APLLICATION');
    const products = await this.productsPaymentRepository.findAll();

    return { products };
  }
}
