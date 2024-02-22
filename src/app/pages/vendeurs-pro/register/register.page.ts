import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { CategoriesService } from 'src/app/services/global/categories.service';
import { CountriesService } from 'src/app/services/global/countries.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';
import { RtdbService } from 'src/app/services/global/rtdb.service';

import { RegisterService } from 'src/app/services/vendeurs/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss' , '../../../../assets/styles/forms.css'],
})
export class RegisterPage{
  constructor(private formBuilder: FormBuilder,
        public globalPropsService: GlobalePropsService,
            private router: Router,
            public authService: AuthService,
            public rtdbService: RtdbService,
            public categoriesService: CategoriesService,
            public countriesService: CountriesService,
            public registerService: RegisterService
  ) {

        globalPropsService.currentProfile = 'visitor'
  }



  getCountry(event: any){
    this.countriesService.countries.map((country)=>{
      if (country.nom===event) {
         this.registerService.countryPhoneCode= country.code
         this.registerService.countryPhoneSize= country.longueur
      }
    })
  }
  navigate(route: string){
    this.router.navigateByUrl(route)
  }

}
