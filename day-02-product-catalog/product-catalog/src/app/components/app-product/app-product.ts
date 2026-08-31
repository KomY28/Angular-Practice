  import { Component, inject } from '@angular/core';
  import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import { ProductService } from '../../services/product-service';
  import { Product } from '../../models/product';
import { RouterLink } from "@angular/router";


  @Component({
    selector: 'app-app-product',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './app-product.html',
    styleUrl: './app-product.css',
  })
  export class AppProduct {
    service=inject(ProductService);
    
    form=new FormGroup({
      name: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required])

    });
      addProduct(){

        const idLists=this.service.productsList().map(productname=>productname.id);

        const maxID=Math.max(...idLists);
        const newID=maxID+1;

        const formValues=this.form.value;

        const ujAdatok={
          name:formValues.name as string,
          price: Number (formValues.price),
          description: formValues.description as string,
          id: newID,
          
        }
        this.service.addProduct(ujAdatok);
      }
    
  }
