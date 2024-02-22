import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage {
 @ViewChild(IonModal) modal: any ;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


 links = [
    { icon: 'home', label: 'Dashboard', path: '/dashboard' },
    { icon: 'people', label: 'Mes clients', path: '/clients' },
    { icon: 'cube', label: 'Gestion des produits', path: '/produits' },
    { icon: 'color-palette', label: 'Design des pages', path: '/design' },
    { icon: 'megaphone', label: 'Marketing et promotions', path: '/marketing' },
    { icon: 'person', label: 'Mon profil', path: '/profil' },
    { icon: 'log-out', label: 'Déconnexion', path: '/logout' }
  ];
  constructor(
        public globalPropsService: GlobalePropsService,
        private router: Router

  ) {
      globalPropsService.currentProfile= 'seller'
   }

 navigate(link: any){
  alert(link)
    this.router.navigateByUrl('vendeurs'+link)
 }


}
