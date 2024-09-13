import { Module } from '@nestjs/common';
import { CreatedProductsController } from './infra/http/products/create/controller';
import { GetProductsController } from './infra/http/products/get/controller';
import { GetProductsUseCase } from './usecase/products/get-products.usecase';
import { CreatedProductsUseCase } from './usecase/products/create-products.usecase';
import { ProductsRepository } from './infra/repository/products.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Products } from './infra/repository/model/products.model';
import { IProductsRepository } from './core/interfaces/repositories/products.interface';
import { UpdatedProductsController } from './infra/http/products/update/controller';
import { UpdatedProductsUseCase } from './usecase/products/update-products.usecase';
import { DeleteProductsUseCase } from './usecase/products/delete-products.usecase';
import { DeleteProductControllers } from './infra/http/products/delete/controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: +configService.get<string>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE'),
        entities: [Products],
      }),
    }),
    TypeOrmModule.forFeature([Products]),
  ],
  controllers: [
    CreatedProductsController,
    GetProductsController,
    UpdatedProductsController,
    DeleteProductControllers,
  ],
  providers: [
    {
      provide: IProductsRepository,
      useClass: ProductsRepository,
    },
    GetProductsUseCase,
    CreatedProductsUseCase,
    UpdatedProductsUseCase,
    DeleteProductsUseCase,
  ],
})
export class AppModule {}
