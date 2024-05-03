import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Article2Component, IPost } from '../article2/article2.component';
import { Post2Component } from '../post2/post2.component';
import { Post2Service } from '../post2/post2.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-articles2',
  standalone: true,
  imports: [NgFor, Article2Component, Post2Component, NgIf],
  templateUrl: './articles2.component.html',
  styleUrl: './articles2.component.scss'
})
export class Articles2Component implements OnInit {
  
  constructor(public post2Service: Post2Service, public router: ActivatedRoute, private activatedRoute: ActivatedRoute){}
  posts: IPost[] = []

  postIdFromLocation!: Params
  likeFromLocation!: Params
  fragmentFromLocation!: string

  ngOnInit(): void {
    this.post2Service.getPosts().subscribe(
      post => {
        this.posts = [...this.posts, post]
      },
      error => console.log(error)
    )

    this.router.params.subscribe(params =>{
        this.postIdFromLocation = params['id']
    })
    this.router.queryParams.subscribe(params =>{
        this.likeFromLocation = params['like']
    })
    this.router.fragment.subscribe(params =>{
        this.fragmentFromLocation = (<string>params)
    })

    this.activatedRoute.data.subscribe(({hero}) => {
      console.log(hero)
    });
  }

 
  addPost(post: IPost){
    this.posts = [...this.posts, post ]
  }



  clearPosts(){
    this.posts = []
  }
}
