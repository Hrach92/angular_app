import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getDataById(id: number): Observable<PostType> {
    return this.http.get<PostType>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
