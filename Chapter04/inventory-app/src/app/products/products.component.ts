import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, IProduct } from './../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted;
  selectedProduct: IProduct;
  productOpen;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onDelete(product) {
      this.delete = true;
      this.productToBeDeleted = product;
  }

  handleCancel() {
      this.delete = false;
  }

  confirmDelete() {
      this.handleCancel();
      // We need to implement this method removeProduct in our ProductsService
      this.productsService.removeProduct(this.productToBeDeleted);
  }

    addProduct() {
        this.productOpen = true;
        this.selectedProduct = undefined;
    }

    onEdit(product) {
        this.productOpen = true;
        this.selectedProduct = product;
    }

    handleFinish(event) {
        if (event && event.product) {
            if (this.selectedProduct) {
                // Edit Flow
                this.productsService.editProduct(this.selectedProduct.id, event.product);
            } else {
                // Save New
                this.productsService.addProduct(event.product);
            }
        }
        this.productOpen = false;
    }

    trackById(index, item) {
      return item.id;
    }

}
