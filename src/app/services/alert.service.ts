import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
