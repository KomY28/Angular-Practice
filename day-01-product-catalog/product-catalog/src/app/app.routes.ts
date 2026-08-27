    import { Routes } from '@angular/router';
    import { ProductDetail } from './components/product-detail/product-detail';
    import { ProductList } from './components/product-list/product-list';

    export const routes: Routes = [
        
        {path: "products", component: ProductList},
        {path: "products/:id", component: ProductDetail},
        {path: "**", component: ProductList},
    ];
