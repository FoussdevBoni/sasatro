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
  constructor(
            public globalPropsService: GlobalePropsService,
            private router : Router,
           public   authService: AuthService,
           public rtdbService: RtdbService

  ) {
    globalPropsService.currentProfile = 'visitor'
   }

 navigate(route: string){
    this.router.navigateByUrl(route)
 }

 login(){
  console.log(this.email)
   this.authService.login(this.email , this.password).then((user)=>{

  this.rtdbService.getDataById(user.user?.uid , 'clients').subscribe(data => {
        if (data!==null) {
          localStorage.setItem('profileType' , 'client')
          this.globalPropsService.currentProfile = 'buyer'
          this.router.navigateByUrl('/home/'+user.user?.uid)
        }else{
              this.globalPropsService.presentAlert('Echec', 'La connexion à votre compte a échoué')        }
      });
   }).catch(()=>{
      this.globalPropsService.presentAlert('Echec', 'La connexion à votre compte a échoué')
   })
 }
}
