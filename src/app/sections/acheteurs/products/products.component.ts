import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/acheteurs/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent  implements OnInit {
  app = null
   recommendedProducts:  any;
    selectedProduct: any;
  constructor(
    private router: Router,
    public productsService: ProductsService
  ) {
     this.recommendedProducts = productsService.getProducts()
   }

  ngOnInit() {
    this.app = null
  }
 // Utilisez le type approprié pour vos données de produit

  onProductSelected(product: any) {
    this.selectedProduct = product;
    console.log(product)
    this.router.navigateByUrl('/product-details/'+product.id)
    // Vous pouvez également naviguer vers la page product-details ici, par exemple, en utilisant une route
  }

}
