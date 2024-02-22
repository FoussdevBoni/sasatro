import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalePropsService } from './globale-props.service';
import { AuthErrorCodes } from 'firebase/auth';
import { RtdbService } from './rtdb.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId: string = ''
  constructor(
    private afAuth: AngularFireAuth,
    public rtdbService: RtdbService,
    private router: Router,
    public globalPropsService: GlobalePropsService
  ) {


  }

 login(email: string, password: string) {
   return  this.afAuth.signInWithEmailAndPassword(email, password)

  }

  register(email: string, password: string ) {
     return this.afAuth.createUserWithEmailAndPassword(email, password)

  }

 // Fonction pour la deconnexion de l'utilisateur

  logout() {
    return this.afAuth.signOut();
  }
   sendPasswordResetEmail(email: string): Promise<void> {
        return this.afAuth.sendPasswordResetEmail(email);
  }

getAuthState(originPath: string , logoutRoute: string): Promise<any> {

  return new Promise((resolve, reject) => {
    this.afAuth.authState.subscribe((user) => {
      if (user) {

         this.rtdbService.getDataById(user?.uid , 'vendeurs').subscribe(data => {
        if (data) {
             this.router.navigateByUrl(originPath+'/'+user?.uid)
             if (originPath==='/home') {
                  this.globalPropsService.currentProfile = 'buyer'

             }else if (originPath!=='/vendeurs/dashboard') {
                    this.globalPropsService.currentProfile = 'seller'

             }


        }else{
             this.globalPropsService.currentProfile = 'visitor'
             this.router.navigateByUrl(logoutRoute)
        }
});


        console.log('Utilisateur connecté:', user);
        this.userId = user.uid
        this.router.navigateByUrl(originPath+'/' + user.uid);
        resolve(user);





} else {
    // L'utilisateur n'est pas connecté
        console.log('Utilisateur déconnecté');
        this.router.navigateByUrl(logoutRoute)
        reject('Utilisateur non connecté');
      }
    });
  });
}


handleAuthError(error: any): string {
        let errorMessage = '';

        switch (error.code) {
            case AuthErrorCodes.EMAIL_EXISTS:
                errorMessage = 'L\'adresse e-mail est déjà utilisée.';
                break;
            case AuthErrorCodes.INVALID_EMAIL:
                errorMessage = 'L\'adresse e-mail est invalide.';
                break;
            case AuthErrorCodes.OPERATION_NOT_ALLOWED:
                errorMessage = 'L\'inscription n\'est pas autorisée.';
                break;
            // Ajoutez d'autres cas d'erreur selon vos besoins
            default:
                errorMessage = 'Une erreur d\'inscription s\'est produite.';
                break;
        }

        return errorMessage;
    }
}
