import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';
import { environment } from './../../environments/environment';

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
    this.http.put(environment.firebase.postsPutEndpoint, this.postsService.getPosts())
      .subscribe(
        (response: any) => {
            console.log(response);
        }
      );
  }

  fetchPosts() {
    return this.http.get<Post[]>(environment.firebase.postsGetEndpoint)
      .pipe(
        tap((posts: Post[]) => {
          console.log(posts);
          this.postsService.setPosts(posts);
        })
      );
  }
}
