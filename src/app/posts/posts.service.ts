import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];

  constructor() {
    this.posts = [
      new Post("Welcome", "This is the welcome post.", "Jashua R. White", "1/1/2022","welcome"),
      new Post("Angular Tutorials", "This is about Angular tutorials.", "Jashua R. White", "1/2/2022","tutorial"),
      new Post("Material UI", "This is about Material UI.", "Jashua R. White", "1/3/2022","misc")
    ];
  }

  getPosts() {
    return this.posts.slice();
  }
}