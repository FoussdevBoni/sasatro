import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutique-item',
  templateUrl: './boutique-item.component.html',
  styleUrls: ['./boutique-item.component.scss'],
})
export class BoutiqueItemComponent   {

  constructor() { }
@Input() boutique: any; // Utilisez le type approprié pour vos données de produit
  @Output() productSelected = new EventEmitter<any>();

  onBoutiqueClick() {
    this.productSelected.emit(this.boutique);

  }

}
