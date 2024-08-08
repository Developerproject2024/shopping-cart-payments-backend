import { IProducts } from './products';

export abstract class ProductsPaymentsRepository {
  abstract findAll(): Promise<IProducts[]>;
}
