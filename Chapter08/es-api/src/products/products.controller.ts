import { Get, Controller } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productsService.findAll();
  }
}
