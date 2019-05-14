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
  constructor(public authservice : AuthService,public actionSheetController: ActionSheetController
    ,public router: Router) {}
  
 
  ngOnInit() {
  }

  atras(){
    this.router.navigate(['/inicio-cajero']);
  }

  users: any[] = [
    {
      id: 1,
      first: 'Primer estado factura'
    },
    {
      id: 2,
      first: 'Segundo estado factura'
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;
}

