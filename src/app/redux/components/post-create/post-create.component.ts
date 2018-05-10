import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interface/app-state';
import * as PostActions from '../../actions/posts-actions';
import { Actions } from '@ngrx/effects';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  formGroup:FormGroup
  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) {
    
   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      categories: [''],
      content: ['']
    })

  }


  createPost(){
      let post = this.formGroup.getRawValue();
      this.store.dispatch(PostActions.createPost(post));
  }
}
