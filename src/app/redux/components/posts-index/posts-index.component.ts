import { Component, OnInit } from '@angular/core';
import { AppState } from '../../interface/app-state';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';
import * as PostsActions from '../../actions/posts-actions';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.css']
})
export class PostsIndexComponent implements OnInit {
  _: any = _;
  posts: Observable<any>;
  postsList: Array<any> = [];
  subscription: Subscription;
  constructor(private store: Store<AppState>, private router: Router) { 
    this.posts = store.select('posts');
  }

  ngOnInit() {
    this.store.dispatch(PostsActions.getPosts());
    this.subscription = this.posts.subscribe((data)=>{
      if(data){
        this.postsList = data;
      }
    
    })
  }
  

  viewPost(id){
    this.router.navigate([`viewPost/${id}`])
  }

}
