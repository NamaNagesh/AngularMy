import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as go from 'gojs';

const $= go.GraphObject.make;

@Component({
  selector: 'app-product-template-details',
  templateUrl: './product-template-details.component.html',
  styleUrls: ['./product-template-details.component.scss']
})
export class ProductTemplateDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  templateId:any;
  public diagram:any=null;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log("id",params['id'])
      this.templateId=params['id'];
    })
  }
  ngAfterViewInit(){
    this.diagram = $(go.Diagram,'MyDia')
    this.diagram.nodeTemplate= $(go.Node,"Auto",
    $(go.Shape,"RoundedRectangle",
      {fill:"cyan",portId:"",fromLinkable:true,toLinkable:true},

     ),
     $(go.TextBlock,{margin:8},
       new go.Binding("text","key")
      ),
    )
    this.diagram.linkTemplate=$(go.Link,{relinkableFrom:true,relinkableTo:true},
        $(go.Shape),
        $(go.Shape,{toArrow:"Standard"})
      )

   this.diagram.model=$(go.GraphLinksModel,{
     nodeDataArray:[
       {key:"Router"},
       {key:"Transformer"}
     ],
     linkDataArray:
     [
       {from:"Router",to:"Transformer"}
     ]
   })   
  }
  
}
