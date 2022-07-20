import { Component, OnInit } from '@angular/core';
//import { MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.scss']
})
export class DataProductsComponent implements OnInit {

  constructor() { }

  displayedColumns = ['productName', 'sproductTemplate', 'lastVersionStatus', 'versions','lastUpdate','updatedBy','releases','lastRelease'];
  dataSource : ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago'},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago'},
  ];
  
  ngOnInit(): void {
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
