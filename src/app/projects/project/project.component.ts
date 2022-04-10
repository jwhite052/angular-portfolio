import { AfterViewChecked, Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmbedCodePenService } from 'src/app/shared/embed-code-pen.service';
import { Post } from '../../posts/post.model';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewChecked {

  id: string;
  project: Post;
  content: SafeHtml;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private embedCodePenService: EmbedCodePenService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log('Called onInit project.component...')
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        console.log('Called activatedRoute project.component...')
        this.id = params['id'];
        this.project = this.postsService.getPost(this.id);
        this.content = this.domSanitizer.bypassSecurityTrustHtml(this.project.content);
      }
    );
  }

  ngAfterViewChecked() {
    this.embedCodePenService.init();
  }
}
