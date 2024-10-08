import { Injectable } from '@nestjs/common';
import { IProductsRepository } from 'src/core/interfaces/repositories/products.interface';

@Injectable()
export class GetProductsUseCase {
  constructor(private readonly repository: IProductsRepository) {}

  async execute() {
    return await this.repository.get();
  }
}
