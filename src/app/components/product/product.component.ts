import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductType, products } from './data';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products: ProductType[] = products;
}
