import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiquesService } from 'src/app/services/acheteurs/boutiques.service';

@Component({
  selector: 'app-boutique-list',
  templateUrl: './boutique-list.component.html',
  styleUrls: ['./boutique-list.component.scss'],
})
export class BoutiqueListComponent  {
     app = null
   recommendedShops:  any;
    selectedBoutique: any;
  constructor(
    private router: Router,
    public boutiqueService: BoutiquesService
  ) {
     this.recommendedShops = boutiqueService.getProducts()
   }

  ngOnInit() {
    this.app = null
  }
 // Utilisez le type approprié pour vos données de produit

  onProductSelected(product: any) {
    this.selectedBoutique = product;
    console.log(product)
    this.router.navigateByUrl('/boutique-details/'+product.id)
    // Vous pouvez également naviguer vers la page product-details ici, par exemple, en utilisant une route
  }

}
