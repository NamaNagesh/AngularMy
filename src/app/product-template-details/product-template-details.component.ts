import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as go from 'gojs';

//const $= go.GraphObject.make;

@Component({
  selector: 'app-product-template-details',
  templateUrl: './product-template-details.component.html',
  styleUrls: ['./product-template-details.component.scss']
})
export class ProductTemplateDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  templateId:any;
  public myDiagram:any=null;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log("id",params['id'])
      this.templateId=params['id'];
    })
  }
  ngAfterViewInit(){
  //   this.myDiagram = $(go.Diagram,'MyDia')
  //   this.myDiagram.nodeTemplate= $(go.Node,"Auto",
  //   $(go.Shape,
  //     {figure:"RoundedRectangle",fill:"cyan",portId:"",fromLinkable:true,toLinkable:true},
  //     new go.Binding("figure","shape"),
  //     new go.Binding("fill","color")
  //    ),
  //    $(go.TextBlock,{margin:8},
  //      new go.Binding("text","key")
  //     ),
  //   )
  //   this.myDiagram.linkTemplate=$(go.Link,{relinkableFrom:true,relinkableTo:true},
  //       $(go.Shape),
  //       $(go.Shape,{toArrow:"Standard"})
  //     )

  //  this.myDiagram.model=$(go.GraphLinksModel,{
  //    nodeDataArray:[
  //      {key:"Router",shape:"RoundedRectangle",color:"lightgreen"},
  //      {key:"Transformer",shape:"Ellipse",color:"cyan"}
  //    ],
  //    linkDataArray:
  //    [
  //      {from:"Router",to:"Transformer"}
  //    ]
  //  })   
 
  //trail

  this.myDiagram =
  new go.Diagram("myDiagramDiv",  // must name or refer to the DIV HTML element
    {
      // grid: $(go.Panel, "Grid"
      //   // $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
      //   // $(go.Shape, "LineH", { stroke: "gray", strokeWidth: 0.5, interval: 10 }),
      //   // $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 }),
      //   // $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.5, interval: 10 })
      // ),
      "draggingTool.dragsLink": true,
      "draggingTool.isGridSnapEnabled": true,
      "linkingTool.isUnconnectedLinkValid": true,
      "linkingTool.portGravity": 20,
      "relinkingTool.isUnconnectedLinkValid": true,
      "relinkingTool.portGravity": 20,
      "relinkingTool.fromHandleArchetype":
        new go.Shape( "Diamond", { segmentIndex: 0, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "tomato", stroke: "darkred" }),
      "relinkingTool.toHandleArchetype":
        new go.Shape( "Diamond", { segmentIndex: -1, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "darkred", stroke: "tomato" }),
      "linkReshapingTool.handleArchetype":
        new go.Shape("Diamond", { desiredSize: new go.Size(7, 7), fill: "lightblue", stroke: "deepskyblue" }),
      "rotatingTool.handleAngle": 270,
      "rotatingTool.handleDistance": 30,
      "rotatingTool.snapAngleMultiple": 15,
      "rotatingTool.snapAngleEpsilon": 15,
      "undoManager.isEnabled": true
    });

// when the document is modified, add a "*" to the title and enable the "Save" button
this.myDiagram.addDiagramListener("Modified", (e:any) => {
  let button:any = document.getElementById("SaveButton");
  if (button) button.disabled = !this.myDiagram.isModified;
  var idx = document.title.indexOf("*");
  if (this.myDiagram.isModified) {
    if (idx < 0) document.title += "*";
  } else {
    if (idx >= 0) document.title = document.title.slice(0, idx);
  }
});



// Define a function for creating a "port" that is normally transparent.
// The "name" is used as the GraphObject.portId, the "spot" is used to control how links connect
// and where the port is positioned on the node, and the boolean "output" and "input" arguments
// control whether the user can draw links from or to the port.
function makePort(name:any, spot:any, output:any, input:any) {
  // the port is basically just a small transparent circle
  return new go.Shape( "Circle",
    {
      fill: null,  // not seen, by default; set to a translucent gray by showSmallPorts, defined below
      stroke: null,
      desiredSize: new go.Size(7, 7),
      alignment: spot,  // align the port on the main Shape
      alignmentFocus: spot,  // just inside the Shape
      portId: name,  // declare this object to be a "port"
      fromSpot: spot, toSpot: spot,  // declare where links may connect at this port
      fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
      cursor: "pointer"  // show a different cursor to indicate potential link point
    });
}

// var nodeSelectionAdornmentTemplate =
//   new go.Adornment( "Auto",
  
   
//   );

// var nodeResizeAdornmentTemplate =
//   $(go.Adornment, "Spot",
//     { locationSpot: go.Spot.Right },
//     $(go.Placeholder),
//     $(go.Shape, { alignment: go.Spot.TopLeft, cursor: "nw-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
//     $(go.Shape, { alignment: go.Spot.Top, cursor: "n-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
//     $(go.Shape, { alignment: go.Spot.TopRight, cursor: "ne-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),

//     $(go.Shape, { alignment: go.Spot.Left, cursor: "w-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
//     $(go.Shape, { alignment: go.Spot.Right, cursor: "e-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),

//     $(go.Shape, { alignment: go.Spot.BottomLeft, cursor: "se-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
//     $(go.Shape, { alignment: go.Spot.Bottom, cursor: "s-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
//     $(go.Shape, { alignment: go.Spot.BottomRight, cursor: "sw-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" })
//   );


this.myDiagram.nodeTemplate =
  new go.Node( "Spot").add(
     
    new go.Panel("Auto",
      { name: "PANEL" }).bind(
      new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)).add(
      new go.Shape(  // default figure
        {
          geometry: go.Geometry.parse("M120 0 L80 80 0 50z"), 
          portId: "", // the default port: if no spot on link data, use closest side
          fromLinkable: true, toLinkable: true, cursor: "pointer",
          fill: "white",  // default color
          strokeWidth: 2
        }).bind(
        new go.Binding("figure")).bind(
        new go.Binding("fill")).bind(
        new go.Binding("stroke"))).add(
      new go.TextBlock(
        {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          margin: 8,
          maxSize: new go.Size(160, NaN),
          wrap: go.TextBlock.WrapFit,
          editable: true
        }).bind(
        new go.Binding("text").makeTwoWay())
    )
  );

  // this.myDiagram.linkTemplate=$(go.Link,{relinkableFrom:true,relinkableTo:true},
  //         $(go.Shape),
  //         $(go.Shape,{toArrow:"Standard"})
  //       )
  

function showSmallPorts(node:any, show:any) {
  node.ports.each((port:any) => {
    if (port.portId !== "") {  // don't change the default port, which is the big shape
      port.fill = show ? "rgba(0,0,0,.3)" : null;
    }
  });
}

var linkSelectionAdornmentTemplate =
  new go.Adornment( "Link",
   
  ).add(new  go.Shape({ isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 })  )

this.myDiagram.linkTemplate =
  new go.Link( { selectable: true, selectionAdornmentTemplate: linkSelectionAdornmentTemplate , relinkableFrom: true, relinkableTo: true, reshapable: true }).bind( new go.Binding("points").makeTwoWay()).add(
    new go.Shape(  // the link path shape
      { isPanelMain: true, strokeWidth: 2 }),
    new go.Shape(  // the arrowhead
      { toArrow: "Standard", stroke: null }),
    new go.Panel( "Auto").bind(
      new go.Binding("visible", "isSelected").ofObject()).add(
      new go.Shape( "RoundedRectangle",  // the link shape
        { fill: "#F8F8F8", stroke: null })).add(
      new go.TextBlock(
        {
          textAlign: "center",
          font: "10pt helvetica, arial, sans-serif",
          stroke: "#919191",
          margin: 2,
          minSize: new go.Size(10, NaN),
          editable: true
        }).bind(
        new go.Binding("text").makeTwoWay())
    )
  );

  // this.myDiagram.nodeTemplate= $(go.Node,"Auto",
  //   $(go.Shape,
  //     {figure:"RoundedRectangle",fill:"cyan",portId:"",fromLinkable:true,toLinkable:true},
  //     new go.Binding("figure"),
  //     new go.Binding("fill")
  //    ),
  //    $(go.TextBlock,{margin:8},
  //      new go.Binding("text","key")
  //     ),
  //   )
  // this.myDiagram.linkTemplate=$(go.Link,{relinkableFrom:true,relinkableTo:true},
  //         $(go.Shape),
  //         $(go.Shape,{toArrow:"Standard"})
  //       )
  

  this.myDiagram.model=new go.GraphLinksModel({
    nodeDataArray:[
     { text: "Start", figure: "RoundedRectangle", fill: "white" },
     { text: "End", figure: "RoundedRectangle", fill: "white" },
    ],
    linkDataArray:
    [
     
    ]
  })   
this.load();  // load an initial diagram from some JSON text

// initialize the Palette that is on the left side of the page
  new go.Palette("myPaletteDiv",  // must name or refer to the DIV HTML element
    {
      maxSelectionCount: 1,
      nodeTemplateMap: this.myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
      linkTemplate: // simplify the link template, just in this Palette
        new go.Link(
          { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
            // to line up the Link in the same manner we have to pretend the Link has the same location spot
            locationSpot: go.Spot.Center,
            selectionAdornmentTemplate:
              new go.Adornment("Link",
                { locationSpot: go.Spot.Center }).add(
                new go.Shape(
                  { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 })).add(
                new go.Shape(  // the arrowhead
                  { toArrow: "Standard", stroke: null })
              )
          }).add(
      
          new go.Shape(  // the link path shape
            { isPanelMain: true, strokeWidth: 2 })).add(
          new go.Shape( // the arrowhead
            { toArrow: "Standard", stroke: null })
        ),
      model: new go.GraphLinksModel([  // specify the contents of the Palette
       
        { text: "Router",figure:"RoundedRectangle",stroke:"lightpink" },
        { text: "Transformer", figure: "RoundedRectangle", stroke: "lightgreen" },
        { text: "Spliter", figure: "RoundedRectangle", stroke: "lightskyblue" },
        { text: "Spliter Aggregator", figure: "RoundedRectangle", stroke: "orange" },
        { text: "Recipient List", figure: "RoundedRectangle", stroke: "purple" },
        { text: "Recipient List Aggregator", figure: "RoundedRectangle", stroke: "brown" },
       
      ], [
          // the Palette also has a disconnected Link, which the user can drag-and-drop
          // { points: new go.List(/*go.Point*/).addAll([new go.Point(0, 0), new go.Point(30, 0), new go.Point(30, 40), new go.Point(60, 40)]) }
        ])
    });

    new go.Palette("myPaletteDiv1",  // must name or refer to the DIV HTML element
    {
      maxSelectionCount: 1,
      nodeTemplateMap: this.myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
      linkTemplate: // simplify the link template, just in this Palette
        new go.Link(
          { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
            // to line up the Link in the same manner we have to pretend the Link has the same location spot
            locationSpot: go.Spot.Center,
            routing: go.Link.AvoidsNodes,
            curve: go.Link.JumpOver,
            corner: 5,
            toShortLength: 4,
            selectionAdornmentTemplate:
              new go.Adornment( "Link",
                { locationSpot: go.Spot.Center }).add(
                new go.Shape(
                  { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 })).add(
                new go.Shape( // the arrowhead
                  { toArrow: "Standard", stroke: null })
              )
          }).bind(
          new go.Binding("points")).add(
          new go.Shape(  // the link path shape
            { isPanelMain: true, strokeWidth: 2 })).add(
          new go.Shape(  // the arrowhead
            { toArrow: "Standard", stroke: null })
        ),
      model: new go.GraphLinksModel([  // specify the contents of the Palette
      
        { text: "DFG Services", figure: "RoundedRectangle", stroke: "darkblue" },
        { text: "GME Service", figure: "RoundedRectangle", stroke: "navyblue" },
        { text: "Rules Editor Connector", figure: "RoundedRectangle", stroke: "navyblue" },
       
      ], [
          // the Palette also has a disconnected Link, which the user can drag-and-drop
          // { points: new go.List(/*go.Point*/).addAll([new go.Point(0, 0), new go.Point(30, 0), new go.Point(30, 40), new go.Point(60, 40)]) }
        ])
    });



  }
   save() {
    this.saveDiagramProperties();  // do this first, before writing to JSON
    //document.getElementById("mySavedModel").value = myDiagram.model.toJson();
    this.myDiagram.isModified = false;
  }
  load() {
    //myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    this.loadDiagramProperties();  // do this after the Model.modelData has been brought into memory
  }

   saveDiagramProperties() {
    this.myDiagram.model.modelData.position = go.Point.stringify(this.myDiagram.position);
  }
   loadDiagramProperties() {
    // set Diagram.initialPosition, not Diagram.position, to handle initialization side-effects
    var pos = this.myDiagram.model.modelData.position;
    if (pos) this.myDiagram.initialPosition = go.Point.parse(pos);
  }
}
