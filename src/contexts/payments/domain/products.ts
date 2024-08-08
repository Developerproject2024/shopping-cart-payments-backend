export class StockDto {
  id: number;
  quantity: number;
}

export interface IProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stocks: StockDto[];
}

export class Product {
  constructor() {
    console.log('DOMINIO');
  }

  toValue(products: IProducts[]) {
    return products
      .filter((product) => product.stocks.some((stock) => stock.quantity > 0))
      .map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        stocks: product.stocks,
      }));
  }
}
