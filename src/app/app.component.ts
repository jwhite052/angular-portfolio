import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav')
  sidenav: MatSidenav;

  title = 'angular-portfolio';

  constructor(private dialog: MatDialog, private dataStorageService: DataStorageService) {}

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
}
