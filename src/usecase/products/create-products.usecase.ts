import { ProductDto } from './dtos/product.dto';
import { plainToInstance } from 'class-transformer';
import { Products } from 'src/core/entities/products.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductsRepository } from 'src/core/interfaces/repositories/products.interface';

@Injectable()
export class CreatedProductsUseCase {
  constructor(private readonly repository: IProductsRepository) {}

  execute(prod: ProductDto) {
    if (!prod.barcode) throw new Error();

    return this.repository.save(plainToInstance(Products, prod));
  }
}
