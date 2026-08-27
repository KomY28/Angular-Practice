  import { Injectable, signal } from '@angular/core';
  import { Product } from '../models/product';

  @Injectable({
    providedIn: 'root',
  })
  export class ProductService {
    private data=signal<Product[]>([
      {id: 1, name: "Laptop", price: 250000,description: "Használt laptop",},
      {id: 2, name: "Telefon", price: 350000,description: "Új telefon",},
      {id: 3, name: "Egér", price: 30000,description: "Gamer egér",}
    ]);

    productsList=this.data.asReadonly();

    getProductById(id:number)
    {
    const foundId=this.data().find(userid=>userid.id===id);
    return foundId;
    }
  }
