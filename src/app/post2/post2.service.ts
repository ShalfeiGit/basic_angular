import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, take } from 'rxjs';
import { IPost } from '../article2/article2.component';

export interface IGetPostResponse {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class Post2Service {
  constructor(private http: HttpClient){}

  getPosts(): Observable<IPost>{
    return this.http.get<IGetPostResponse[]>('https://jsonplaceholder.typicode.com/posts', {
      headers: {'TEST': 'TEST_HEADERS'},
      params: {'_limit': 2}
    })
    .pipe(
      concatMap(posts => posts.map(post => ({
        text: post.body,
        title: post.title,
        id: post.id}))),
      take(2)
    );
  }
  
}
