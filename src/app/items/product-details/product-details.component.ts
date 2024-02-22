import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent  implements OnInit {
 @Input() product: any
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
