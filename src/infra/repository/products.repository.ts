import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/core/entities/products.entity';
import { IProductsRepository } from 'src/core/interfaces/repositories/products.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsRepository implements IProductsRepository {
  constructor(
    @InjectRepository(Products)
    private readonly repository: Repository<Products>,
  ) {}

  update(id: number, prod: Products) {
    try {
      this.repository.update(id, prod);
      return true;
    } catch (err) {
      return false;
    }
  }

  delete(id: number) {
    try {
      this.repository.delete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  save(prod: Products) {
    try {
      this.repository.save(prod);
      return true;
    } catch (err) {
      return false;
    }
  }

  async get(): Promise<Products[]> {
    return await this.repository.find();
  }
}
