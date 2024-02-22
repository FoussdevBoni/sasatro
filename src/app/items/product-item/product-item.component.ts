import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: any; // Utilisez le type approprié pour vos données de produit
  @Output() productSelected = new EventEmitter<any>();
   
  onProductClick() {
    this.productSelected.emit(this.product);

  }
}
