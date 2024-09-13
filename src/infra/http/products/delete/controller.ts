import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { DeleteProductsUseCase } from 'src/usecase/products/delete-products.usecase';

@Controller('product/delete/')
export class DeleteProductControllers {
  constructor(private readonly deleteProductsUseCase: DeleteProductsUseCase) {}

  @Delete(':id')
  destroy(@Param('id', ParseIntPipe) id: number) {
    return this.deleteProductsUseCase.execute(id);
  }
}
