/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/* eslint-disable prettier/prettier */
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'posts',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
