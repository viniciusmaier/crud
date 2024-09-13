import { Injectable } from '@nestjs/common';
import { ProductsEntity } from 'src/core/entities/products.entity';

@Injectable()
export class ProductsRepository {
  static products: Array<ProductsEntity> = [];

  save(prod: ProductsEntity) {
    ProductsRepository.products.push(prod);
  }

  get() {
    return ProductsRepository.products;
  }
}
