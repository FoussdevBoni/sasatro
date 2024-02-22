import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { CategoriesService } from 'src/app/services/global/categories.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';
import { RtdbService } from 'src/app/services/global/rtdb.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent   {

  constructor(
    public categoriesServices: CategoriesService,
    private router: Router,
    public globalPropsService: GlobalePropsService,
    public authService: AuthService,
    public rtdbService: RtdbService
  ) { }


}
