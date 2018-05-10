import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PostsIndexComponent } from '../redux/components/posts-index/posts-index.component';
import { PostCreateComponent } from '../redux/components/post-create/post-create.component';
import { PostsViewComponent } from '../redux/components/posts-view/posts-view.component';

export const routes: Routes = [
    {path: '', component: PostsIndexComponent},
    {path: 'createPost', component: PostCreateComponent},
    {path: 'viewPost/:id', component: PostsViewComponent}

];

export const ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(routes)