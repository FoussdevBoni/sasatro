import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FireStorageService } from '../global/fire-storage.service';
import { AuthService } from '../global/auth.service';
import { RtdbService } from '../global/rtdb.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  vendeur$: Observable<any>; // Observable pour surveiller les mises à jour de vendeur
  image$: Observable<any>
   seller: any;
   productPicture: any
   products: any = []
  constructor(
    private fireStorageService: FireStorageService,
    private authService: AuthService,
    public userService: UserService,
    private rtdbService: RtdbService,
    private afdb: AngularFireDatabase
  ) {
    // Souscrivez à vendeur$ pour être notifié des mises à jour
    this.vendeur$ = this.userService.vendeur$;

    this.vendeur$.subscribe((vendeur) => {
      console.log('Nouvelle valeur de vendeur dans CatalogueService:', vendeur);
      // Vous pouvez utiliser la valeur de vendeur ici
      this.seller = vendeur
    });

      // Souscrivez à image$ pour être notifié des mises à jour


     this.image$ = fireStorageService.image$
      this.image$.subscribe((image) => {
      console.log('Nouvelle valeur de image dans CatalogueService:', image);
      // Vous pouvez utiliser la valeur de vendeur ici
      this.productPicture = image
    });


    this.userService.getUserById();
  }

  pushNewProduct(formData: any) {
    const data = {
      productName: formData.productName,
      productCategory: formData.productCategory,
      productPrice: formData.productPrice,
      productDescription: formData.productDescription,
      productQuantity: formData.productQuantity,
      productPicture:   this.productPicture,
      date: new Date().toISOString(),
      vendeur: this.seller,
      status: 'disponible'
    };

    const dataRef1 = 'products/' + this.authService.userId;

   return  this.afdb.list(dataRef1).push(data).then((res)=>{

          const dataRef2 = 'products/allProducts/'+res.key;
            const updateData = {
              ...data,
              id: res.key
            }
       this.afdb.object(dataRef2).set(updateData)
       this.afdb.object(dataRef1+'/'+res.key+'/id').set(res.key)
   })
  }

  getMyProduct(){
    const dataRef = 'products/' + this.authService.userId;
   return  this.rtdbService.getData(dataRef)
  }



}



