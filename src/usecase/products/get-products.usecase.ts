import { Injectable } from '@nestjs/common';
import { ProductsRepository } from 'src/infra/repository/products.repository';

@Injectable()
export class GetProductsUseCase {
  constructor(private readonly repository: ProductsRepository) {}

  async execute() {
    return await this.repository.get();
  }
}
