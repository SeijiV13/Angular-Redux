import { Injectable } from '@angular/core';
import { Actions, Effect } from "@ngrx/effects";
import { PostsService } from '../../services/posts.service';
import * as PostActions from '../actions/posts-actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';


@Injectable()
export class PostsEffects {
    constructor(private action$: Actions, private postsService: PostsService, private router: Router){

    }

    @Effect() getPost$ = this.action$.ofType(PostActions.GET_POSTS).switchMap(() => this.postsService.getPosts()).map(
        (posts)=> PostActions.getPostsSuccess(posts))

    @Effect() createPost$ = this.action$.ofType(PostActions.CREATE_POST).switchMap((post: any) => this.postsService.createPost(post.payload)).map(
        (post) => PostActions.getPosts())
        .do(()=> this.router.navigate(['']))
     
    @Effect() getSinglePost$ = this.action$.ofType(PostActions.GET_SINGLE_POST).switchMap((post: any) => this.postsService.getSinglePost(post.payload)).map(
        (post) => PostActions.getSinglePostSuccess(post))

    @Effect() deletePost$ = this.action$.ofType(PostActions.DELETE_POST).switchMap((post: any) => this.postsService.deletePost(post.payload)).map(
            (post) => PostActions.getPosts())
            .do(()=> this.router.navigate(['']))
     }