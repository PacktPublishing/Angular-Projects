import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsModelToken')
    private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
}
