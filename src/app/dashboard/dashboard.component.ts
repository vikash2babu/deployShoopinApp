import { ProductDetails } from './../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    items:ProductDetails[] = [];
    constructor() { }

    ngOnInit(): void { 
    }

    onAddItem(product:ProductDetails){
        if(this.items.length === 0){
            product.quantity = 1;
            this.items.push(product);
        }
        else{
            let item: any = this.items.find(p=>p == product);
            if(item){
                item.quantity = item.quantity?item.quantity+1:1;
            }
            else{
                product.quantity = 1;
                this.items.push(product);
            }
            
        }

        this.items =  this.items.slice();
    }

}
