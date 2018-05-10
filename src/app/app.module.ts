import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//REDUX
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';

// FOR ROUTES
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_PROVIDER} from './routes/main.routes';
import { PostsIndexComponent } from './redux/components/posts-index/posts-index.component'
import { PostsReducer } from './redux/reducers/posts-reducer';
import { PostsEffects } from './redux/effects/posts-effects';
import { PostsService} from './services/posts.service';
import { PostCreateComponent } from './redux/components/post-create/post-create.component';
import { PostsViewComponent } from './redux/components/posts-view/posts-view.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsIndexComponent,
    PostCreateComponent,
    PostsViewComponent
  ],
  imports: [
    ROUTER_PROVIDER,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot({
      posts: PostsReducer
    }),
    EffectsModule.forRoot([PostsEffects])
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
