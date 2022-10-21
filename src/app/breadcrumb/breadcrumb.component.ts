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
  editMode:boolean=false;

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AboutDialogComponent, {
      width: '600px',
      data: {  }
    });
  

}

editClicked():void{
  console.log("ng")
   this.editMode=!this.editMode;
}


}