import { PartialType } from '@nestjs/mapped-types';
import { createdProductsRequestBodyParam } from '../create/request';

export class UpdatedProductsResquestBodyParams extends PartialType(
  createdProductsRequestBodyParam,
) {}
