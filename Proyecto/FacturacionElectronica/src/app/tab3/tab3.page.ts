import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
