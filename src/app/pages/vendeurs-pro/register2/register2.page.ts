import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';
import { RtdbService } from 'src/app/services/global/rtdb.service';

import { RegisterService } from 'src/app/services/vendeurs/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page{
 champ1: any ;
  champ2: any ;
  champ3: any ;
  champ4: any ;
  champ5: any ;
  champ6: any ;
  champ7: any ;
  champ8: any ;
  siren = ''
  // Déclarez des propriétés pour chaque champ que vous souhaitez récupérer


  constructor(
            public globalPropsService: GlobalePropsService,
            private router: Router,
            public authService: AuthService,
            public rtdbService: RtdbService ,
            public registerService: RegisterService

  ) {
    globalPropsService.currentProfile = 'visitor'
   }

    register(){

    }
      submitForm() {
    // Vous pouvez accéder aux valeurs des champs ici
    console.log('Valeur de champ1 :', this.champ1);
    console.log('Valeur de champ2 :', this.champ2);
    console.log('Valeur de champ3 :', this.champ3);
    console.log('Valeur de champ4 :', this.champ4);
    console.log('Valeur de champ5 :', this.champ5);
    console.log('Valeur de champ6 :', this.champ6);
    console.log('Valeur de champ7 :', this.champ7);
    console.log('Valeur de champ8 :', this.champ8);
    // ... Autres traitements
  }

    focusNext1(event: any, nextInput: any) {

       if (this.champ1!==undefined) {
            document.getElementById("champ2")?.focus()
            console.log('c1',this.champ1)
            this.siren = this.siren+ this.champ1
    }

  }
   focusNext2(event: any, nextInput: any) {

       if (this.champ2!==undefined) {
            document.getElementById("champ3")?.focus()
            console.log('c1',this.champ2)
              this.siren = this.siren+ this.champ2

    }

  }
   focusNext3(event: any, nextInput: any) {

       if (this.champ3!==undefined) {
            document.getElementById("champ4")?.focus()
            console.log('c1',this.champ3)
            this.siren = this.siren+ this.champ3

    }

  }


    focusNext4(event: any, nextInput: any) {

       if (this.champ4!==undefined) {
            document.getElementById("champ5")?.focus()
            console.log('c4',this.champ4)
           this.siren = this.siren+ this.champ4

    }



  }

   focusNext5(event: any, nextInput: any) {

       if (this.champ5!==undefined) {
            document.getElementById("champ6")?.focus()
            console.log('c5',this.champ5)
         this.siren = this.siren+ this.champ5

    }

  }

   focusNext6(event: any, nextInput: any) {

       if (this.champ6!==undefined) {
            document.getElementById("champ7")?.focus()
            console.log('c6',this.champ6)
            this.siren = this.siren+ this.champ6

    }

  }
   focusNext7(event: any, nextInput: any) {

       if (this.champ7!==undefined) {
            document.getElementById("champ8")?.focus()
            console.log('c7',this.champ7)
                     this.siren = this.siren+ this.champ7

    }

  }

   focusNext8(event: any, nextInput: any) {

       if (this.champ7!==undefined) {

       this.registerService.siren = this.siren+ this.champ8
      console.log(this.registerService.siren)
    }

  }



}
