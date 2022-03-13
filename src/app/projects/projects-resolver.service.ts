import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<Post[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Post[] {
    const projects = this.postsService.getPosts();
    
    if (projects.length === 0) {
      return this.dataStorageService.fetchPosts();
    } else {
      return projects;
    }
  }
}