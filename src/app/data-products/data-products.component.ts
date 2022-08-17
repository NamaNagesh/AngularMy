import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.scss']
})
export class DataProductsComponent implements OnInit {

  constructor(public dialog: MatDialog,private http: HttpClient) {}

  @ViewChild('matSort') sort:MatSort= new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;

  MOCK_RES={
    "dataProducts":[
      {
       "status":"active",
       "lastModifiedBy":"axdf",
       "lastModifiedDate":"2022-08-06T00:39:35.053+00:00",
       "uuid":"f2jhgdaj222hh2hh2h22",
       "dataProductName":"Equifax dataProduct",
       "releaseCount":"01",
       "latestVersion":"v1",
       "templateName":"product1",
       "organizationId":"01",
       "deployedReleaseId":"JDK 549",
       "action":""
      },
      {
        "status":"active",
        "lastModifiedBy":"axdfs",
        "lastModifiedDate":"2022-08-09T00:39:35.053+00:00",
        "uuid":"f2jhgdaj222hh2hh2h22",
        "dataProductName":"Equifax dataProduct",
        "releaseCount":"01",
        "latestVersion":"v1",
        "templateName":"product2",
        "organizationId":"01",
        "deployedReleaseId":"JDK 549",
        "action":""
       }
    ],
    "pagination":{
      "offset":0,
      "limit":0,
      "total":0
    }
  }

  displayedColumns = ['dataProductName', 'templateName', 'status', 'latestVersion','lastModifiedDate','lastModifiedBy','releaseCount','deployedReleaseId','actions'];
  DISPLAY_DATA:any[]=[];
  ELEMENT_DATA: ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago',actions:''},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions',lastUpdate:'32 minutes ago',updatedBy:'John Christen',releases:'2 Releases',lastRelease:'2 months ago',actions:''},
  ];
 
  dataSource=new MatTableDataSource(this.DISPLAY_DATA);
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.http.get("http://localhost:8444/configuration-service/api/data-products").subscribe((res:any)=>{
      this.dataSource=new MatTableDataSource(this.DISPLAY_DATA);
    },
    (error:any)=>{
      console.log("error");
      // add mock data
      this.DISPLAY_DATA=this.MOCK_RES["dataProducts"];
      console.log(this.DISPLAY_DATA);
      this.dataSource=new MatTableDataSource(this.DISPLAY_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    )
 
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
