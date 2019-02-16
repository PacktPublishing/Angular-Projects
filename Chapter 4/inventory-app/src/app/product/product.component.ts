import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'in-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;
  @Input() product;

  constructor(private fb: FormBuilder) {
      this.productForm = this.fb.group({
          basic: fb.group({
              name: '',
              description: '',
              active: false,
              features: fb.array([
                  fb.control('')
              ])
          }),
          expiration: fb.group({
              expirationDate: null,
          })
      });
  }
  ngOnInit() {
  }

}
