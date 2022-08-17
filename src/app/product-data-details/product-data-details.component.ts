import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-data-details',
  templateUrl: './product-data-details.component.html',
  styleUrls: ['./product-data-details.component.scss']
})
export class ProductDataDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  templateId:any;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log("id",params['id'])
      this.templateId=params['id'];
    })
  }

}
