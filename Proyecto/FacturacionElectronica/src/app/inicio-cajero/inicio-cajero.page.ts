import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import{AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-inicio-cajero',
  templateUrl: './inicio-cajero.page.html',
  styleUrls: ['./inicio-cajero.page.scss'],
})
export class InicioCajeroPage implements OnInit {
  constructor(public authservice : AuthService,public actionSheetController: ActionSheetController) {}
  
 
  ngOnInit() {
  }

}
