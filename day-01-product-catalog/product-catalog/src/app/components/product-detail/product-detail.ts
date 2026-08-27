        import { Component, input,computed, inject } from '@angular/core';
    import { ProductService } from '../../services/product-service';
import { RouterLink } from "@angular/router";

        @Component({
          selector: 'app-product-detail',
          standalone: true,
          imports: [RouterLink],
          templateUrl: './product-detail.html',
          styleUrl: './product-detail.css',
        })
        export class ProductDetail {
          productService = inject(ProductService);
          id=input<string>();
          product=computed(()=>{
            const numericId=Number(this.id());
            return this.productService.getProductById(numericId);
          });
          
        
        }
