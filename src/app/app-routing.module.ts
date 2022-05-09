import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsResolverService } from './projects/projects-resolver.service';
import { BlogComponent } from './blog/blog.component';
import { PostsResolverService } from './posts/posts-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: [ PostsResolverService] },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  { path: 'blog/:id', component: PostComponent, resolve: [ PostsResolverService ] },
  { path: 'projects', component: ProjectsComponent, resolve: [ PostsResolverService ], pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectComponent, resolve: [ ProjectsResolverService ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
