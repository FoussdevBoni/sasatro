import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/acheteurs/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage  {
  @Input() selectedProduct: any;
  product: any
  constructor(
    public productService: ProductsService,
    private route: ActivatedRoute
  ) {
           const productId = this.route.snapshot.paramMap.get('id');

           this.getProductById(productId)
            console.log(this.product)

   }



   getProductById(id: any) {

    this.productService.getProducts().map((product: any)=>{
      if ( product.id.toString() ===id) {
        this.product = product
         return product
      }
    })
  }

}
