import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalePropsService {
  currentProfile = 'buyer'
  constructor(
    private router: Router,
    public alertCtrl: AlertController
  ) {


  }

defineProfile(){

}

 getSegmentPath(index: number): string {
  const currentUrl = this.router.url;
  const segments = currentUrl.split('/');
  return segments[index];
}

async presentAlert(header: string , message: string) {
  const alert = await this.alertCtrl.create({
    header: header,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}


async presentCustomAlert(message: string, onConfirm: () => void, onCancel: () => void) {
  const alert = await this.alertCtrl.create({
    header: 'Confirmation',
    message: message,
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: onCancel
      },
      {
        text: 'OK',
        handler: onConfirm
      }
    ]
  });

  await alert.present();
}
}
