import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';
import { RtdbService } from 'src/app/services/global/rtdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../../../assets/styles/forms.css'],
})
export class LoginPage  {
  email: any ;
  password: any;
  vendeur: any
  constructor(
            public globalPropsService: GlobalePropsService,
            private router : Router,
           public   authService: AuthService,
           public rtdbService: RtdbService,


  ) {
    globalPropsService.currentProfile = 'visitor'
   }

 navigate(route: string){
    this.router.navigateByUrl(route)
 }

 login(){
   this.authService.login(this.email , this.password).then((user)=>{
       this.rtdbService.getDataById(user.user?.uid , 'vendeurs').subscribe(data => {
        if (data!==null) {
            localStorage.setItem('profileType' , 'vendeur')
             this.router.navigateByUrl('/vendeurs/dashboard/'+user.user?.uid)
            this.globalPropsService.currentProfile = 'seller'
        }else{
            this.authService.logout()
             this.globalPropsService.currentProfile = 'visitor'
             this.router.navigateByUrl('/vendeurs/login')
        }
      });
   }).catch(()=>{
      this.globalPropsService.presentAlert('Echec', 'La connexion à votre compte a échoué')
   })
 }
}
