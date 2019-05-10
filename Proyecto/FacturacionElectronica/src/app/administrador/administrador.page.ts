import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import{AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(public router: Router,public authservice : AuthService) { }

  ngOnInit() {
  }

  consultarFacturasDia(){
    this.router.navigate(['/factura-dia']);
  }

  consultarFacturasMes(){
    this.router.navigate(['/factura-mes']);
  }
  
  reportesIva(){
    this.router.navigate(['/reporte-iva']);
  }

  OnLogout(){
    this.authservice.logout();
  }

}
