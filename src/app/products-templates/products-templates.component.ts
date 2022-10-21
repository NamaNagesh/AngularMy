import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-products-templates',
  templateUrl: './products-templates.component.html',
  styleUrls: ['./products-templates.component.scss']
})
export class ProductsTemplatesComponent implements OnInit {


  constructor(public dialog: MatDialog,private messageService:MessageService) {}

  @ViewChild('matSort') sort:MatSort= new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;

  @ViewChild('matSort1') sort1:MatSort= new MatSort();
  @ViewChild('paginator1') paginator1!: MatPaginator;

  showToast:boolean=false;

  displayedColumns = ['productName', 'sproductTemplate', 'lastVersionStatus', 'versions','actions'];
  ELEMENT_DATA : ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions',actions:''},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions',actions:''},
  ];

  dataSource=new MatTableDataSource(this.ELEMENT_DATA);
  dataSource1=new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    this.showToast=true;
       let dialogRef = this.dialog.open(AddProductDialogComponent, {
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

    this.dataSource1.sort = this.sort1;
    this.dataSource1.paginator = this.paginator1;
  }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface ElementObj {
  productName: string;
  sproductTemplate: string;
  lastVersionStatus: string;
  versions: string;
  actions:string;

}
