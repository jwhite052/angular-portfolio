import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';
import { environment } from './../../environments/environment';

interface PostObject {
  [key: string]: {
    title: string,
    content: string,
    author: string,
    date: string,
    category: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private postsService: PostsService
  ) { }

  storePosts() {
    if (this.postsService.getPosts().length === 0) {
      return;
    }

    // console.log('storePosts', this.createPostsObject(this.postsService.getPosts()));

    this.http.put(environment.firebase.postsPutEndpoint, this.createPostsObject(this.postsService.getPosts()))
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }

  fetchPosts() {
    return this.http.get<Post[]>(environment.firebase.postsGetEndpoint)
      .pipe(
        tap((posts: any) => {
          this.postsService.setPosts(this.createPostsArray(posts));
        })
      );
  }

  createPostsObject(posts: Post[]): object {
    let postsObjects: PostObject = {};

    posts.forEach((post) => {
      postsObjects[post.id] = {
        title: post.title,
        date: post.date,
        category: post.category,
        content: post.content,
        author: post.author
      };
    });

    return postsObjects;
  }

  createPostsArray(posts: PostObject): Post[] {
    const postsArray: Post[] = [];

    Object.keys(posts).forEach((key: any) => {
      postsArray.push(new Post(
        posts[key].title,
        posts[key].content,
        posts[key].author,
        posts[key].date,
        posts[key].category,
        key));
    });

    return postsArray;
  }
}
