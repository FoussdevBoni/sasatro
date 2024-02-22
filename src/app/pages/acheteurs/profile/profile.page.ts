import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/acheteurs/users.service';
import { AuthService } from 'src/app/services/global/auth.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],

})
export class ProfilePage  {
  user: any
  constructor(
    public usersService: UsersService,
    public authService: AuthService,
    public globalePropsService: GlobalePropsService
  ) {

  usersService.getUserById()

  this.user = usersService.client
  }

   logout(){
     this.globalePropsService.presentCustomAlert(
  'Voulez-vous vraiment vous deconnecter ?',
  () => {
    console.log('Action confirmée');
    this.authService.logout()
  },
  () => {
    console.log('Action annulée');
    // Ajoutez votre logique ici pour l'action annulée
  }
);
   }

}
