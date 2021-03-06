import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { DataStorageService } from './shared/data-storage.service';
import { PostsService } from './posts/posts.service';
import { postsLocalContent } from './posts/posts-local-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav')
  sidenav: MatSidenav;

  title = 'angular-portfolio';

  constructor(private dialog: MatDialog, private dataStorageService: DataStorageService, private postsService: PostsService) {}

  ngAfterViewInit() {
    // this.sidenav.open();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = ['profile-dialog-panel', 'animate__animated', 'animate__fadeInDownBig'];
    dialogConfig.backdropClass = ['profile-dialog-backdrop'];

    this.dialog.open(ProfileDialogComponent, dialogConfig);
  }

  onStorePosts() {
    this.dataStorageService.storePosts();
  }

  onFetchPosts() {
    this.dataStorageService.fetchPosts()
      .subscribe(
        (response) => {
            console.log(response);
        }
      );
  }

  onLoadLocalPosts() {
    this.postsService.setPosts(postsLocalContent);
  }

  @HostListener('window:resize', ['$event'])
  sizeChange(event: any) {
    if (window.innerWidth < 400) {
      this.sidenav.close();
    }
  }
}
