import { ProductsRepository } from 'src/infra/repository/products.repository';
import { ProductDto } from './dtos/product.dto';
import { plainToInstance } from 'class-transformer';
import { ProductsEntity } from 'src/core/entities/products.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatedProductsUseCase {
  constructor(private readonly repository: ProductsRepository) {}

  execute(user: ProductDto) {
    if (!user.barcode) throw new Error();

    return this.repository.save(user);
  }
}
