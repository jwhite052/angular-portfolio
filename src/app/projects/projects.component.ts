import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';
import { EmbedCodePenService } from '../shared/embed-code-pen.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewChecked, OnDestroy {

  private subscription: Subscription;
  projects: Post[];

  constructor(
    private postsService: PostsService,
    private embedCodePenService: EmbedCodePenService) { }

  ngOnInit(): void {
    this.projects = this.postsService.getPostsByCategory('project');
    console.log('Called projects.component...', this.projects);
    this.subscription = this.postsService.postsChanged.subscribe(() => {
      this.projects = this.postsService.getPostsByCategory('project');
    });
  }

  ngAfterViewChecked() {
    this.embedCodePenService.init();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
