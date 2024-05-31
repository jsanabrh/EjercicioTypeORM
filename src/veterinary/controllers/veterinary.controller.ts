import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VeterinaryService } from '../services/veterinary.service';
import { CreateVeterinaryDto } from '../dtos/create-veterinary.dto';
import { PaginationDto } from '../dtos/pagination.dto';

@ApiTags('Veterinary')
@Controller('veterinary')
export class VeterinaryController {
  constructor(private readonly veterinaryService: VeterinaryService) {}

  @Post()
  @ApiOperation({
    description: 'Create a product',
  })
  create(@Body() createProduct: CreateVeterinaryDto) {
    return this.veterinaryService.createProduct(createProduct);
  }

  @ApiOperation({
    description: 'View the products',
  })
  @Get()
  findBySearch(@Query() pagination: PaginationDto) {
    return this.veterinaryService.findPagination(pagination);
  }

  @Get('/findAll')
  @ApiOperation({
    description: 'Find all the products.',
  })
  findAll() {
    return this.veterinaryService.findAll();
  }
}
