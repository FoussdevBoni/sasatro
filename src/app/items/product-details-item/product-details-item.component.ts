import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-item',
  templateUrl: './product-details-item.component.html',
  styleUrls: ['./product-details-item.component.scss'],
})
export class ProductDetailsItemComponent  implements OnInit {

 @Input() product: any
  constructor() { }
  ngOnInit() {
   return 0
  }




  isLiked = false;

  ajouterAuPanier() {
    // Logique pour ajouter le produit au panier
  }

  contacterLeVendeur() {
    // Logique pour contacter le vendeur
  }

  signalerLeProduit() {
    // Logique pour signaler le produit
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

}
