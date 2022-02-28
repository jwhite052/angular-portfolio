import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProfileDialogComponent>) { }

  ngOnInit(): void {
  }

}