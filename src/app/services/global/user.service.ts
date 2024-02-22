import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RtdbService } from './rtdb.service';
import { AcheteurService } from './../acheteurs/acheteur.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  acheteur$: Observable<any>; // Observable pour surveiller les mises à jour de vendeur
     seller: any;


  constructor(
    private acheteurService: AcheteurService
  ){
         this.acheteur$ = this.acheteurService.acheteur$;
        this.acheteurService.getUserById();
  }


  getSeller(){
   return  this.acheteur$
  }

}
