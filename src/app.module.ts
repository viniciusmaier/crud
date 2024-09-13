import { Module } from '@nestjs/common';
import { CreatedProductsController } from './infra/http/products/create/controller';
import { GetProductsController } from './infra/http/products/get/controller';
import { GetProductsUseCase } from './usecase/products/get-products.usecase';
import { CreatedProductsUseCase } from './usecase/products/create-products.usecase';
import { ProductsRepository } from './infra/repository/products.repository';

@Module({
  imports: [],
  controllers: [CreatedProductsController, GetProductsController],
  providers: [GetProductsUseCase, CreatedProductsUseCase, ProductsRepository],
})
export class AppModule {}
