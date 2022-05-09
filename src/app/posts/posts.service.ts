import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [];

  constructor() { }

  getPost(id: string) {
    let p = {};
    this.posts.forEach((post) => {
      if (post['id'] === id) {
        p = post;
      }
    });
    return <Post>p;
  }

  getPosts() {
    return this.posts.slice();
  }

  getPostsByCategory(cateogry: string): Post[] {
    let filtered = this.posts.filter((post) => {
      return post.category === cateogry;
    });
    return filtered;
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }
}