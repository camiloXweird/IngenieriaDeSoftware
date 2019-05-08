import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.page.html',
  styleUrls: ['./cajero.page.scss'],
})
export class CajeroPage implements OnInit {

  constructor(public authservice : AuthService,public actionSheetController: ActionSheetController) { }
  
  OnLogout(){
    this.authservice.logout();
  }
  
  ngOnInit() {
  }

}
