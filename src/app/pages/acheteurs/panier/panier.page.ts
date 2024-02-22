// src/app/panier/panier.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  produits = [
    { id: 1, nom: 'Montre de 2024', prix: 10, image: 'https://images.bfmtv.com/wHjSbEdXUE4KcS8YBysWr-i13us=/0x0:1260x840/1260x0/biz_dev/1688119930348_montre_benyar_offre_jpg.jpg', quantite: 1 },

    { id: 2, nom: 'Produit 2', prix: 20, image: 'https://www.teamclic.fr/images/resource/products/vente-pc-portable-redon.png', quantite: 5 },
     { id: 1, nom: 'Montre de 2024', prix: 10, image: 'https://images.bfmtv.com/wHjSbEdXUE4KcS8YBysWr-i13us=/0x0:1260x840/1260x0/biz_dev/1688119930348_montre_benyar_offre_jpg.jpg', quantite: 1 },

    { id: 2, nom: 'Produit 2', prix: 20, image: 'https://www.teamclic.fr/images/resource/products/vente-pc-portable-redon.png', quantite: 5 },


    // Ajoutez d'autres produits selon vos besoins
  ];

  constructor(private navCtrl: NavController , private router: Router) {}

  retirerDuPanier(produit: any) {
    // Logique pour retirer un produit du panier
    console.log('Produit retiré :', produit);
  }

  ajouterQuantite(produit: any) {
    produit.quantite++;
  }

  retirerQuantite(produit: any) {
    if (produit.quantite > 1) {
      produit.quantite--;
    }
  }

  calculerCoutTotal() {
    return this.produits.reduce((total, produit) => total + produit.prix * produit.quantite, 0);
  }
  calculQuantityTotal(){
      return this.produits.reduce((total, produit) => total + produit.quantite, 0);
  }
  passerCommande() {

    this.router.navigateByUrl('/chackout')
  }
}
