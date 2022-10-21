import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-my',
  templateUrl: './toast-my.component.html',
  styleUrls: ['./toast-my.component.scss']
})
export class ToastMyComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    console.log("test");
    this.messageService.add({severity:'info', summary: 'Record is added successully', detail:'record added'});

    //this.messageService.add({severity:'info', summary: 'Record is added successully', detail:'record added'});

  }

  ngAfterViewInit(){
    
    this.messageService.add({severity:'info', summary: 'Record is added successully', detail:'record added'});

  }
  tostClick(){
    console.log("in toast")
    this.messageService.add({severity:'info', summary: 'Record is added successully', detail:'record added'});

  }
  ngOnchanges(){
    console.log("test");
    //this.messageService.add({severity:'info', summary: 'Record is added successully', detail:'record added'});

  }

}
