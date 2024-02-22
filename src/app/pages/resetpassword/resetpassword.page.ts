import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/global/auth.service';
import { GlobalePropsService } from 'src/app/services/global/globale-props.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss' , '../../../assets/styles/forms.css'],
})
export class ResetpasswordPage  {

  email: string = '';
    successMessage: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService,
    public globalePropsService: GlobalePropsService,
    private router: Router
    ) {
      globalePropsService.currentProfile = 'visitor'
    }
    navigate(route: string){
    this.router.navigateByUrl(route)
 }


    resetPassword() {
        this.authService.sendPasswordResetEmail(this.email)
            .then(() => {
                // Réinitialisation de mot de passe réussie

                this.globalePropsService.presentAlert('Envoi réussi' , 'Un email de réinitialisation de mot de passe a été envoyé à votre adresse.')
            })
            .catch((error) => {
                // Une erreur s'est produite lors de la réinitialisation de mot de passe
                    this.globalePropsService.presentAlert('Envoi échoué' , 'Erreur lors de la réinitialisation de mot de passe')
                console.error('Erreur lors de la réinitialisation de mot de passe :', error);
            });
    }
}
