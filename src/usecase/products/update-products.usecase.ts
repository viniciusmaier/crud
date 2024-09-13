import { Injectable } from '@nestjs/common';
import { Products } from 'src/core/entities/products.entity';
import { IProductsRepository } from 'src/core/interfaces/repositories/products.interface';

@Injectable()
export class UpdatedProductsUseCase {
  constructor(private readonly repository: IProductsRepository) {}

  async execute(id: number, prod: Products) {
    return await this.repository.update(id, prod);
  }
}
