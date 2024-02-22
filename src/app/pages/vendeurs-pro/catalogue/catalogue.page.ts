import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AuthService } from 'src/app/services/global/auth.service';
import { FireStorageService } from 'src/app/services/global/fire-storage.service';

import { CatalogueService } from 'src/app/services/vendeurs/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage  {

 @ViewChild(IonModal) modal: any ;
   formData = {
    productName: '',
    productPrice: 0,
    productDescription: '',
    productQuantity: 0,
    productPicture: '',
    productCategory: ''
   }
     openForm: boolean = true
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null , 'confirm');
  }



    // Déclarez les variables pour les filtres
  selectedCategory: string = '';
  selectedStatus: string = '';
  isFilterModalOpen: boolean = false;
 // Simulez des données de produits (remplacez cela par vos données réelles)
  products: any;

    constructor(private modalController: ModalController , public fireStorageService: FireStorageService , private authService: AuthService , public cataloService: CatalogueService) {

     this.getProducts()

    }

 onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
     this.cataloService.pushNewProduct(this.formData)
    }
  }

  // Filtrer les produits en fonction des filtres sélectionnés
  get filteredProducts() {
    return this.products.filter((product: any )=>
      (this.selectedCategory === '' || product.productCategory === this.selectedCategory)
    );
  }


 publishProduct(){
  this.cataloService.pushNewProduct(this.formData).then((res)=>{
    this.confirm()
    this.openForm = false
  })
 }

 getProducts(){
  this.cataloService.getMyProduct()
    .subscribe(actions => {
        this.products = [];
        console.log('actions', actions)
        actions.forEach(action => {
          const product = {
            id: action.key,
            ...action.payload.exportVal()
          };

          this.products.push(product);
              console.log(this.products)


        });
      });

  }
 }




