import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';
import { RtdbService } from 'src/app/services/global/rtdb.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  monFormulaire!: FormGroup
  password: any;
  confirmedPassWord: any;
  formData = {
     email: '',
      firstName: '',
      lastName: '',
      birthdate:  '',
      gender: '',
  }

  constructor(
            public globalPropsService: GlobalePropsService,
            private router: Router,
            public authService: AuthService,
            public rtdbService: RtdbService

  ) {
    globalPropsService.currentProfile = 'visitor'


   }

    register(){
       if (!this.validedForm(this.formData)&&this.password===this.confirmedPassWord) {
          this.authService.register(this.formData.email , this.password).then((user)=>{
      localStorage.setItem('profileType' , 'client')

       const data= {
        email: this.formData.email,
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        birthdate: this.formData.birthdate,
        gender: this.formData.gender,
        id: user.user?.uid,
        profileType: 'client'
       }

      this.rtdbService.setData(data, 'clients/'+user.user?.uid , user.user?.uid).then(()=>{
        this.router.navigateByUrl('home/'+user.user?.uid)
      })
     }).catch((error)=>{
           this.globalPropsService.presentAlert('Inscription échouée' , this.authService.handleAuthError(error))
         console.log(error.message)
     })


     ;
     console.log(this.formData)

       }else{
        this.globalPropsService.presentAlert('Formulaire invalide' , 'Veillez vérifier si tous les champs sont remplis ')
       }
   }

 passwordIsConfirmed(){
  if (this.password===this.confirmedPassWord) {
    return true
  }else{
    return false
  }
 }

  navigate(route: string){
    this.router.navigateByUrl(route)
  }

 validedForm(formData: any): boolean {
    for (const key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] === '') {
            return true;  // La propriété avec une valeur vide a été trouvée
        }
    }
    return false;  // Aucune propriété avec une valeur vide n'a été trouvée
}
}
