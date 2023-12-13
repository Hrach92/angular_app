import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostType } from './types';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  posts: PostType[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getData().subscribe((data) => {
      this.posts = data;
    });
  }
}
