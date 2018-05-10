import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../interface/app-state';
import { Observable, Subscriber, Subscription} from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import * as PostActions from '../../actions/posts-actions';
@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  post: Observable<any>;
  subscription: Subscription;
  constructor(private store:Store<AppState>,  
              private formBuilder: FormBuilder, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.post = store.select('posts');
   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      categories: [''],
      content: ['']
    });
     

   this.subscription = this.post.subscribe((data)=>{
      this.patchFormValue(data);
    })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  patchFormValue(data){
    if(data){
      this.formGroup.patchValue(data[this.activatedRoute.snapshot.params['id']]);
    }
  }

  deletePost(){
    this.store.dispatch(PostActions.deletePost(this.activatedRoute.snapshot.params['id']));
    this.router.navigate(['']);
  }

}
