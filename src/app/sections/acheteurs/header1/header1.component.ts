import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/global/categories.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss'],
})
export class Header1Component   {


  constructor(
     public categoriesServices: CategoriesService,
    private router: Router,
    public globalPropsService: GlobalePropsService,
  ) {

  }
}
