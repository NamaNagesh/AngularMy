import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.scss']
})
export class DataProductsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  @ViewChild('matSort') sort:MatSort= new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns = ['productName', 'sproductTemplate', 'lastVersionStatus', 'versions','lastUpdate','updatedBy','releases','lastRelease','actions'];
  ELEMENT_DATA: ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago',actions:''},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago',actions:''},
  ];
 
  dataSource=new MatTableDataSource(this.ELEMENT_DATA);
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

openDialog(): void {
  let dialogRef = this.dialog.open(AddProductDialogComponent, {
    width: '600px',
    data: {  }
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    if(result)
    console.log(result);
    
  });
}


}

export interface ElementObj {
  productName: string;
  sproductTemplate: string;
  lastVersionStatus: string;
  versions: string;
  lastUpdate: string;
  updatedBy: string;
  releases: string;
  lastRelease: string;
  actions:string
}
