import { MatDialog } from '@angular/material/dialog';
import { SaleDialogeComponent } from './../sale-dialoge/sale-dialoge.component';
import {
    ProductDetails
} from './../product/product.model';
import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit, OnChanges {

    @Input() items: ProductDetails[];
    subTotal: number = 0;
    vat: number;
    discount: number;
    total: number;
    totalItem: number;
    dialogData: DialogData;
    totalQuantity: number;

    constructor(public dialog: MatDialog) {}

    ngOnChanges(changes:SimpleChanges){
        for(let change in changes){
            console.log('changes   -'+change);
            this.priceUpdate();
        }
    }
    

    ngOnInit(): void {
        console.log(this.items);
    }

    onItemQuantityAdd(item: any) {
        item.quantity = item.quantity + 1;
        this.priceUpdate(); 
    }

    onItemQuantityRemove(item: any) {
        if (item.quantity > 1) {
            item.quantity = item.quantity  - 1;
        }
        this.priceUpdate();
    }

    onDeleteItem(item, index) {
        this.items.splice(index, 1)
        this.priceUpdate();
    }

    calculateItemPrice(item: any) {
        this.totalQuantity =  parseInt(item.quantity) * parseInt(item.price);
        return this.totalQuantity;
    }

    onDialoge() {
        const dialogRef = this.dialog.open(SaleDialogeComponent, {
            width: '',
            data: {orderDetail: this.dialogData}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            
          });
    }
    
    priceUpdate() {
        if(this.items.length > 0){
            let itemPrices = this.items.map(v=> v.price * v.quantity);
            this.subTotal = itemPrices.reduce((pre,curr)=> pre +curr);
            this.vat = this.subTotal*10/100;
            this.discount = this.subTotal*10/100;
            console.log(this.vat);
            this.total = this.subTotal+this.vat-this.discount;

            this.totalItem = this.items.map(v=> v.quantity).reduce((pre,curr)=> pre +curr);
            this.dialogData = new DialogData(this.subTotal, this.vat, 
                                              this.discount,this.total, this.totalItem, this.items,
                                              this.totalQuantity);

        } 

    } 

    onCancel() {
        this.subTotal = 0;
        this.vat = null;
        this.discount = null;
        this.total = null;
        this.items.length = 0;
    }

}

export class DialogData {

    subTotal: number;
    vat: number;
    discount: number;
    total: number;
    totalItem: number;
    items: ProductDetails[];
    totalQuantity: number

    constructor(subTotal: number, vat: number, discount: number,total: number,totalItem: number, items: ProductDetails[], totalQuantity: number) {
        this.subTotal = subTotal;
        this.vat = vat;
        this.discount = discount;
        this.total = total;
        this.totalItem = totalItem;
        this.items = items;
        this.totalQuantity = totalQuantity
    }
}