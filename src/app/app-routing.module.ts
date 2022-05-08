import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';
import { PostsResolverService } from './posts/posts-resolver.service';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: [ PostsResolverService ] },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full', resolve: [ PostsResolverService ] },
    { path: ':id', component: PostComponent, resolve: [ PostsResolverService ] }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
