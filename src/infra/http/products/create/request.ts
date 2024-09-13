import { IsNumber, IsNumberString, IsString } from '@nestjs/class-validator';

export class createdProductsRequestBodyParam {
  @IsString()
  description: string;

  @IsNumberString()
  barcode: string;
}
