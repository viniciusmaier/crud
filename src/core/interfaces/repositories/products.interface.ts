import { Products } from 'src/core/entities/products.entity';

export abstract class IProductsRepository {
  abstract get(): Promise<Products[]>;
  abstract save(prod: Products);
  abstract update(id: number, prod: Products);
  abstract delete(id: number);
}
