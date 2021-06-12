import { DialogData } from './../product-table/product-table.component';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sale-dialoge',
  templateUrl: './sale-dialoge.component.html',
  styleUrls: ['./sale-dialoge.component.css']
})
export class SaleDialogeComponent implements OnInit {
    orderDetails: DialogData;
    date: Date = new Date();

    constructor(
        public dialogRef: MatDialogRef<SaleDialogeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.orderDetails = data.orderDetail;
        }
    
      onNoClick(): void {
        this.dialogRef.close();
      }

  ngOnInit(): void {
  }

  calculateItemPrice(item: any) {
    return parseInt(item.quantity) * parseInt(item.price);
}

onClose() {
    this.dialogRef.close();
}

}
