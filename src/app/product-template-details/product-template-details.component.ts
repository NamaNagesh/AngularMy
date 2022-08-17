import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-template-details',
  templateUrl: './product-template-details.component.html',
  styleUrls: ['./product-template-details.component.scss']
})
export class ProductTemplateDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  templateId:any;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log("id",params['id'])
      this.templateId=params['id'];
    })
  }

}
