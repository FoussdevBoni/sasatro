import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent   {
   active = '';
  links = [
    { icon: 'home', label: 'Dashboard', path: '/dashboard', color: '#01b1d7' },
    { icon: 'people', label: 'Mes clients', path: '/clients' , color: '#01b1d7' },
    { icon: 'cube', label: 'Gérer mon catalogue', path: '/catalogue' , color: '#01b1d7' },
    { icon: 'list', label: 'Gérer les commandes', path: '/commandes' , color: '#01b1d7' },
    { icon: 'cash', label: 'Gérer les payements', path: '/payements', color: '#01b1d7' },
    { icon: 'color-palette', label: 'Design des pages', path: '/design' , color: '#01b1d7' },
    { icon: 'megaphone', label: 'Marketing et promotions', path: '/promotions' , color: '#01b1d7' },
    { icon: 'person', label: 'Mon profil', path: '/profil' , color: '#01b1d7' },
    { icon: 'log-out', label: 'Déconnexion', path: '/logout' , color: '#01b1d7' }
  ];
  constructor(
        public globalPropsService: GlobalePropsService,
        private router: Router,
        public authService: AuthService

  ) {
      globalPropsService.currentProfile= 'seller'
   this.active =    this.getCurrentPage()

    console.log('uid' , authService.userId)

   }

 navigate(link: any){
    if(link!=='/logout'){
          this.router.navigateByUrl('vendeurs'+link+'/'+this.authService.userId)

    }else {
      this.globalPropsService.presentCustomAlert(
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

 getCurrentPage(): string {
  const currentUrl = this.router.url;
  const segments = currentUrl.split('/');
  return '/'+segments[segments.length - 2];
}
}
