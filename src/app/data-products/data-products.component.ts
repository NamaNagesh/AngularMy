import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort'


@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.scss']
})
export class DataProductsComponent implements OnInit {

  @ViewChild('matSort') sort:MatSort= new MatSort();
  displayedColumns = ['productName', 'sproductTemplate', 'lastVersionStatus', 'versions','lastUpdate','updatedBy','releases','lastRelease'];
  ELEMENT_DATA: ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago'},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago'},
  ];
 
  dataSource=new MatTableDataSource(this.ELEMENT_DATA);
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
}
