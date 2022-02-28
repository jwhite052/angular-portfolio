import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  posts: Post[];

  constructor(private postsService: PostsService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.subscription = this.postsService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
