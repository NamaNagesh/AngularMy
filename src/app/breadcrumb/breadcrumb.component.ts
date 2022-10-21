import { Component, OnInit,Input} from '@angular/core';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  editMode:boolean=false;

  constructor(public dialog: MatDialog) {}

  @Input()
  templateId:any;

  page:any;

  ngOnInit(): void {
    if(window.location.href.includes("templateDetail")){
      this.page="templateDetail"
    }else if(window.location.href.includes("dataDetails")){
      this.page="dataDetails"
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AboutDialogComponent, {
      width: '600px',
      data: {  }
    });
  

}
editClicked():void{
 
   this.editMode=!this.editMode;
}

}