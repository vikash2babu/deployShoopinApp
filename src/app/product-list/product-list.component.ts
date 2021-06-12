import { ProductDetails } from './../product/product.model';
import { ProductList } from './product-list.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productList = ProductList;

  @Output() itemAdded:EventEmitter<ProductDetails> = new EventEmitter<ProductDetails>();

  constructor() { }

  ngOnInit(): void {
      console.log("item added");
      
  }

  onItemAdded(product:ProductDetails){
    this.itemAdded.emit(product);
    console.log("item added")
  }

}
