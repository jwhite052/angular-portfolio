import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../../posts/post.model';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  id: string;
  project: Post;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Called onInit project.component...')
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        console.log('Called activatedRoute project.component...')
        this.id = params['id'];
        this.project = this.postsService.getPost(this.id);
      }
    );
  }

}
