import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from '../products.service';

@Controller()
export class ProductGrpcServerController {
  constructor(private productsService: ProductsService) {}

  @GrpcMethod('ProductService')
  create(
    data: CreateProductDto,
    metadata: Metadata,
    call: ServerUnaryCall<CreateProductDto, any>,
  ) {
    return this.productsService.create(data);
  }
}
