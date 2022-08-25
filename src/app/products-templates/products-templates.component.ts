import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AddProductTemplateDialogComponent } from '../add-product-template-dialog/add-product-template-dialog.component';




@Component({
  selector: 'app-products-templates',
  templateUrl: './products-templates.component.html',
  styleUrls: ['./products-templates.component.scss']
})
export class ProductsTemplatesComponent implements OnInit {


  constructor(public dialog: MatDialog,private http: HttpClient) {}

  @ViewChild('matSort') sort:MatSort= new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;

  @ViewChild('matSort1') sort1:MatSort= new MatSort();
  @ViewChild('paginator1') paginator1!: MatPaginator;

  displayedColumns = ['templateId', 'templateDescription', 'status', 'lastModifiedBy','lastModifiedDate','actions'];
  ELEMENT_DATA : any[] = [
    {templateId:'Product Data 0', templateDescription: 'Basic Flow', status: 'valid', lastModifiedBy: '7 versions',"lastModifiedDate":"",actions:''},
    {templateId:'Product Data 0', templateDescription: 'Basic Flow', status: 'valid', lastModifiedBy: '7 versions',"lastModifiedDate":"",actions:''},
  ];

  DISPLAY_DATA:any[]=[];

  MOCK_RES:any={
    "templates":[
      {
        "templateId":"template1",
        "templateDescription":"list of dataProductTemplates",
        "status":"valid",
        "lastModifiedBy":"axdsf",
        "lastModifiedDate":"2022-08-05T02:44:56.483+00:00",
        "uuid":"dddddddddddddddddddddddddddddddddd",
        "action":""
      },
      {
        "templateId":"template2",
        "templateDescription":"list of dataProductTemplates21",
        "status":"Invalid",
        "lastModifiedBy":"axdsw",
        "lastModifiedDate":"2022-08-05T02:44:56.483+00:00",
        "uuid":"ccccccccccccccccccc",
        "action":""
      }
    ],
    "pagination" : {
      "offset":0,
      "limit":0,
      "total":0
    }
  }
  dataSource=new MatTableDataSource(this.DISPLAY_DATA);
  //dataSource1=new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddProductTemplateDialogComponent, {
      width: '600px',
      data: {  }
    });
  
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result)
      console.log(result);
     
    });
  }
  


  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

   // this.dataSource1.sort = this.sort1;
    //this.dataSource1.paginator = this.paginator1;
  }
  
  ngOnInit(): void {
    this.http.get("http://localhost:8444/configuration-service/api/data-templates").subscribe((res:any)=>{
      this.dataSource=new MatTableDataSource(this.DISPLAY_DATA);
    },
    (error:any)=>{
      console.log("error");
      // add mock data
      this.DISPLAY_DATA=this.MOCK_RES["templates"];
      console.log(this.DISPLAY_DATA);
      this.dataSource=new MatTableDataSource(this.DISPLAY_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    )
   
  }

}

// export interface ElementObj {
//   productName: string;
//   sproductTemplate: string;
//   lastVersionStatus: string;
//   versions: string;
//   actions:string;

// }
