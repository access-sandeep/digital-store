import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AddressModule } from './modules/addresses/addresses.module';
import { ProductsModule } from './modules/products/products.module';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { Products } from './entities/product.entity';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { CorsMiddleware } from './middlewares/common/cors.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'dukan',
      entities: [User, Address, Products],
      synchronize: true,
    }),
    UsersModule,
    AddressModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('products');
  }
  constructor(private dataSource: DataSource) {}
}
