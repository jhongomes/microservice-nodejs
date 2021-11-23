import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updateResult = await this.productRepository.update(
      id,
      updateProductDto,
    );

    if (!updateResult.affected) {
      throw new EntityNotFoundError(Product, id);
    }
    
    return this.productRepository.findOne(id);
  }

  async remove(id: string) {
    const deleteResult = await this.productRepository.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Product, id);
    }
  }
}
