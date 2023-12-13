import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { ActivatedRoute } from '@angular/router';
import { PostType } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  providers: [ItemService],
})
export class ItemComponent implements OnInit {
  @Input()
  postId: number = 0;
  post: PostType = {};
  details = false;
  constructor(private itemService: ItemService, private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      this.postId = param['id'];
    });
  }

  ngOnInit(): void {
    this.itemService.getDataById(this.postId).subscribe((data) => {
      this.post = data as PostType;
    });
  }
}
