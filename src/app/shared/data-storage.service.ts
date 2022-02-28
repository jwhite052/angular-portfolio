import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private postsService: PostsService
  ) { }

  storePosts() {
    console.log('store!');
    this.http.put('https://ng-portfolio-blog-posts-default-rtdb.firebaseio.com/posts.json', this.postsService.getPosts())
      .subscribe(
        (response) => {
            console.log(response);
        }
      );
  }

  fetchPosts() {
    return this.http.get<Post[]>('https://ng-portfolio-blog-posts-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        tap((posts: Post[]) => {
          this.postsService.setPosts(posts);
        })
      );
  }
}
