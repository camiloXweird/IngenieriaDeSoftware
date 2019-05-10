import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.page.html',
  styleUrls: ['./cajero.page.scss'],
})
export class CajeroPage implements OnInit {

  constructor(public authservice : AuthService,public actionSheetController: ActionSheetController,public router: Router) { }
  
  OnLogout(){
    this.authservice.logout();
  }
  
  ngOnInit() {
  }

  ventas(){
    this.router.navigate(['/inicio-cajero']);
  }

  consultarFacturas(){
    this.router.navigate(['/factura']);
  }

}
