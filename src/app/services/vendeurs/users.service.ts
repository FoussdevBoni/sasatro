import { Injectable } from '@angular/core';
import { AuthService } from '../global/auth.service';
import { RtdbService } from '../global/rtdb.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  vendeur: any
  constructor(
    public authService: AuthService,
    public rtdbService: RtdbService
  ) {

    this.authService.getAuthState('vendeurs/dashbord', '').then((user) => {
  // Traitez l'utilisateur connecté ici
  console.log('Utilisateur récupéré:', user);
  rtdbService.getData('clients/'+user?.uid).subscribe((data)=>{

    this.vendeur = data
  })

}).catch((error) => {
  // Gérez l'erreur (utilisateur non connecté)
  console.error(error);
});

}


}
