import {Component, Inject} from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-template-dialog',
  templateUrl: './add-product-template-dialog.component.html',
  styleUrls: ['./add-product-template-dialog.component.scss']
})
export class AddProductTemplateDialogComponent  {

 constructor( public dialogRef: MatDialogRef<AddProductTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){} 

    description: string='';
    name: string='';

    cancel(): void {
      this.dialogRef.close();
    }

    okClick(val:any): void {
      let result={
         name:this.name,
        descriptiob:this.description
      }
      this.dialogRef.close(result);
    }

}