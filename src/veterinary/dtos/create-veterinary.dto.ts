import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVeterinaryDto {
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nameProduct: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  categoryProduct: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  priceProduct: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amountProduct: number;
}
