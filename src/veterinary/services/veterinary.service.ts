import { Injectable } from '@nestjs/common';
import { CreateVeterinaryDto } from '../dtos/create-veterinary.dto';
import { PaginationDto } from '../dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Veterinary } from '../entities/veterinary.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class VeterinaryService {
  constructor(
    @InjectRepository(Veterinary)
    private readonly veterinaryRepository: Repository<Veterinary>,
  ) {}

  async createProduct(createProduct: CreateVeterinaryDto) {
    const product = this.veterinaryRepository.create(createProduct);
    return await this.veterinaryRepository.save(product);
  }

  async findPagination({ limit, order, page, search, sortBy }: PaginationDto) {
    const [results, total] = await this.veterinaryRepository.findAndCount({
      where: {
        nameProduct: ILike(`%${search}%`),
      },
      order: {
        [sortBy]: order,
      },
      skip: (page - 1) * limit,
    });

    return {
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      dataFound: total,
      results,
    };
  }

  async findAll() {
    return await this.veterinaryRepository.find();
  }
}
