import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPostsByCategory('blog');
    this.subscription = this.postsService.postsChanged.subscribe(() => {
      this.posts = this.postsService.getPostsByCategory('blog');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
