import { Component, OnInit } from '@angular/core';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AboutDialogComponent, {
      width: '600px',
      data: {  }
    });
  

}
}