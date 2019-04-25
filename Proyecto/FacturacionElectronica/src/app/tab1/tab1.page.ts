import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public authservice : AuthService,public actionSheetController: ActionSheetController) {}
  OnLogout(){
    this.authservice.logout();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Cerrar Sesion',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.OnLogout()
        },
      }]
    });
    await actionSheet.present();
  }
}
