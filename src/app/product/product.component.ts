import { ProductDetails } from './product.model';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-data',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:ProductDetails;
  @Output() onProductChange:EventEmitter<ProductDetails> = new EventEmitter<ProductDetails>();
  constructor(private elRef: ElementRef) { 
    this.elRef.nativeElement.style.padding = "10px"
  }

  showExtraItems:boolean;

  @HostListener('mouseenter') onMouseHover(){
    this.showExtraItems = true;
    this.elRef.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.showExtraItems = false;
    this.elRef.nativeElement.style.color = 'black';
  }

  @HostListener('click') onClick(){
    this.onProductChange.emit(this.product);
  }

 

  ngOnInit(): void {
  }

  getImage(product:ProductDetails){
    return "/assets/images/"+product.image;
  }

}
