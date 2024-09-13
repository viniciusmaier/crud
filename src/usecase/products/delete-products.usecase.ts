import { Injectable } from '@nestjs/common';
import { Products } from 'src/core/entities/products.entity';
import { IProductsRepository } from 'src/core/interfaces/repositories/products.interface';

@Injectable()
export class DeleteProductsUseCase {
  constructor(private readonly repository: IProductsRepository) {}

  async execute(id: number) {
    return await this.repository.delete(id);
  }
}
