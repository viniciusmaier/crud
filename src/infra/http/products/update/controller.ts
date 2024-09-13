import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Injectable,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UpdatedProductsResquestBodyParams } from './request';
import { UpdatedProductsUseCase } from 'src/usecase/products/update-products.usecase';
import { Products } from 'src/core/entities/products.entity';

@Injectable()
@Controller('product/update')
export class UpdatedProductsController {
  constructor(private readonly updatedProductUseCase: UpdatedProductsUseCase) {}
  1;
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatedProductsResquestBodyParams,
  ) {
    await this.updatedProductUseCase.execute(id, <Products>data);
  }
}
