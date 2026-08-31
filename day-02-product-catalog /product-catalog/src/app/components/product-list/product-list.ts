import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

   productService=inject(ProductService);
}
