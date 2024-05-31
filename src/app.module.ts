import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { VeterinaryModule } from './veterinary/veterinary.module';
import { Veterinary } from './veterinary/entities/veterinary.entity';
import { VeterinaryController } from './veterinary/controllers/veterinary.controller';
import { VeterinaryService } from './veterinary/services/veterinary.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.develop.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Veterinary],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([Veterinary]),
    VeterinaryModule,
  ],
  controllers: [VeterinaryController],
  providers: [VeterinaryService],
})
export class AppModule {}
