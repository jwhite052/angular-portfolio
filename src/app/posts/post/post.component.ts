import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number;
  post: Post;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log('id', this.id);
        this.post = this.postsService.getPost(this.id);
      }
    )
  }

}
