import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product', component: ProductComponent },
];
