import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-templates',
  templateUrl: './products-templates.component.html',
  styleUrls: ['./products-templates.component.scss']
})
export class ProductsTemplatesComponent implements OnInit {

  displayedColumns = ['productName', 'sproductTemplate', 'lastVersionStatus', 'versions'];
  dataSource : ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions'},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface ElementObj {
  productName: string;
  sproductTemplate: string;
  lastVersionStatus: string;
  versions: string;

}
