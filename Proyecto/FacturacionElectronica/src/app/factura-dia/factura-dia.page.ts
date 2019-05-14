import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-factura-dia',
  templateUrl: './factura-dia.page.html',
  styleUrls: ['./factura-dia.page.scss'],
})
export class FacturaDiaPage implements OnInit {

  constructor(public authservice : AuthService,public actionSheetController: ActionSheetController
    ,public router: Router) {}

  ngOnInit() {
  }

  atras(){
    this.router.navigate(['/inicio-cajero']);
  }

}
