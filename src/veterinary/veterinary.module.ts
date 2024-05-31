import { Module } from '@nestjs/common';
import { VeterinaryService } from './services/veterinary.service';
import { VeterinaryController } from './controllers/veterinary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterinary } from './entities/veterinary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Veterinary])],
  providers: [VeterinaryService],
  controllers: [VeterinaryController],
})
export class VeterinaryModule {}
