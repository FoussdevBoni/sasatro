import { Injectable } from '@angular/core';
import { AuthService } from '../global/auth.service';
import { RtdbService } from '../global/rtdb.service';
;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  client: any
  constructor(
    public authService: AuthService,
    public rtdbService: RtdbService
  ) {




   }


getUserById(){
     this.authService.getAuthState('/home', '/login').then((user) => {
     // Traitez l'utilisateur connecté ici
        console.log('Utilisateur récupéré:', user);
       this.rtdbService.getDataById(user.uid , 'clients').subscribe(data => {
       // Traitez la donnée récupérée ici
      console.log('Donnée récupérée:', data);

      this.client = data
});
     }).catch((error) => {
       // Gérez l'erreur (utilisateur non connecté)
       console.error(error);
  });
}

}
