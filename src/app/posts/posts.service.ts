import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [];

  constructor() { }

  getPosts() {
    return this.posts.slice();
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }
}