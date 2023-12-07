import { Component } from '@angular/core';
import { Product } from '../product.model';
// import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model: Product = new Product();
  prodList: Product[] = [];

  addProduct() {
    // Add the current product to the list
    this.prodList.push({ ...this.model });
    
    // Clear the form fields
    this.model = new Product();
  }

  deleteProduct(index: number) {
    // Remove the product at the specified index
    this.prodList.splice(index, 1);
  }
}
