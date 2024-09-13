import { Body, Controller, Post } from '@nestjs/common';
import { createdProductsRequestBodyParam } from './request';
import { CreatedProductsUseCase } from 'src/usecase/products/create-products.usecase';

@Controller('products/create')
export class CreatedProductsController {
  constructor(private readonly createdProductUseCase: CreatedProductsUseCase) {}

  @Post()
  createProducts(@Body() paramsProducts: createdProductsRequestBodyParam) {
    return this.createdProductUseCase.execute(paramsProducts);
  }
}
