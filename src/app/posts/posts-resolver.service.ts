import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<Post[]> {
  constructor(private dataStorageService: DataStorageService, private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const posts = this.postsService.getPosts();

    if (posts.length === 0) {
      return this.dataStorageService.fetchPosts();
    } else {
      return posts;
    }
  }
}