import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../global/auth.service';
import { RtdbService } from '../global/rtdb.service';
import { GlobalePropsService } from '../global/globale-props.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  monFormulaire: FormGroup;
  countryPhoneCode = '+33';
  countryPhoneSize:number = 0
  siren = '';
  formData: any
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public rtdbService: RtdbService,
    public globalePropsService: GlobalePropsService
  ) {

      this.monFormulaire = this.formBuilder.group({
      fisrtname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      activity: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      companyName: ['', Validators.required],
      shopName: ['', Validators.required],
      adresse: ['', Validators.required],
      typeCommercant: ['', Validators.required],
    });
  }


 onSubmit() {
    if (this.monFormulaire.valid) {
       this.formData = this.monFormulaire.value;
       this.router.navigateByUrl('/vendeurs/register2')
    } else {
      // Le formulaire n'est pas valide, effectuez des actions en conséquence
      console.log('formulaire invalid')
      this.globalePropsService.presentAlert('Formulaire invalide', 'Veillez vérifier les informations saisies et réessayer. Tous les champs sont obligatoires')
    }
  }

  register(){
    const dataToSend = {
      ...this.monFormulaire.value,
      siren: this.siren
    }

    this.authService.register(dataToSend.email , dataToSend.password).then((user)=>{
      localStorage.setItem('profileType' , 'vendeur')
       const data= {
        ...this.monFormulaire.value,
        siren: this.siren,
        id: user.user?.uid,
        profileType: 'vendeur'
       }

      this.rtdbService.setData(data, 'vendeurs/'+user.user?.uid , user.user?.uid).then(()=>{
        this.router.navigateByUrl('vendeurs/dashboard/'+user.user?.uid)
      })
     }).catch((error)=>{
      this.globalePropsService.presentAlert('Inscription échouée' , this.authService.handleAuthError(error))
     })

     ;

  }

}
