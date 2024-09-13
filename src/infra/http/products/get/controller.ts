import { Controller, Get } from '@nestjs/common';
import { GetProductsUseCase } from 'src/usecase/products/get-products.usecase';

@Controller('products/')
export class GetProductsController {
  constructor(private readonly getProductsUseCase: GetProductsUseCase) {}

  @Get()
  getProducts() {
    return this.getProductsUseCase.execute();
  }
}
