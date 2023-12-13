import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/product/item/item.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ItemComponent },
];
