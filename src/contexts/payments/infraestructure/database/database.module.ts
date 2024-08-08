import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../../../shared/config/database.config';
import { CategoryEntity } from './entities/category.entity';
import { ProductEntity } from './entities/products.entity';
import { CustomerEntity } from './entities/customer.entity';
import { DeliveryEntity } from './entities/deliveries.entity';
import { StockEntity } from './entities/stocks.entity';
import { TransactionEntity } from './entities/transactions.entity';
import { CountryEntity } from './entities/country';
import { CityEntity } from './entities/city.entity';
// import { CategoryEntity } from './entities/category.entity';
// import { ProductEntity } from './entities/product.entity';
// import { SupplierEntity } from './entities/supplier.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        const database = config.get<DatabaseConfig>('database');
        console.log('database', new Date());
        const cadenaConcatenada = `sk8-438k4-xmxm392-sn2m3000000COP${new Date()}stagtest_integrity_nAIBuqayW70XpUqJS4qf4STYiISd89Fp`;
        const encondedText = new TextEncoder().encode(cadenaConcatenada);
        const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
        console.log(hashHex);
        return {
          type: 'postgres',
          host: database.host,
          port: +database.port,
          username: database.user,
          password: database.password,
          database: database.name,
          entities: [
            ProductEntity,
            CustomerEntity,
            DeliveryEntity,
            StockEntity,
            TransactionEntity,
            CategoryEntity,
            CountryEntity,
            CityEntity,
          ],
          synchronize: database.environment !== 'prod',
          logging:
            database.environment !== 'prod' && process.env.NODE_ENV !== 'test',
          ssl: {
            rejectUnauthorized: false,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
