import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { GlobalePropsService } from './services/global/globale-props.service';
import { CategoriesService } from './services/global/categories.service';
import { AuthService } from './services/global/auth.service';
import { RtdbService } from './services/global/rtdb.service';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isPanelOpen = false;
  constructor(
    public categoriesServices: CategoriesService,
    private router: Router,
    public globalPropsService: GlobalePropsService,
    public authService: AuthService,
    public rtdbService: RtdbService
    ) {

    }

 // Méthode pour ouvrir/fermer le panneau
  togglePanel(val: boolean) {
    this.isPanelOpen = val;

  }

  backtoHome(route: string){
       this.router.navigateByUrl(route)
  }



}
