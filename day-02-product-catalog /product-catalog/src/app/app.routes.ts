    import { Routes } from '@angular/router';
    import { ProductDetail } from './components/product-detail/product-detail';
    import { ProductList } from './components/product-list/product-list';
import { AppProduct } from './components/app-product/app-product';

    export const routes: Routes = [
        
        {path: "products", component: ProductList},
        {path: "addProductForm", component: AppProduct},
        {path: "products/:id", component: ProductDetail},
        {path: "**", component: ProductList},
    ];
