import { Component, OnInit } from '@angular/core';
import { Router, Routes } from "@angular/router";
import * as firebase from 'firebase';
import { AuthService } from "../servicios/auth.service"; 

@Component({
  selector: 'app-reporte-iva',
  templateUrl: './reporte-iva.page.html',
  styleUrls: ['./reporte-iva.page.scss'],
})
export class ReporteIvaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.mostrarReporte();
  }
  
  db = firebase.firestore();

  atras() {
    if (firebase.auth().currentUser.uid == "K4hqU8cheFfVcSWQvygD99TQPQ23") {
      this.router.navigate(['/administrador'])
      return false;
    } if (firebase.auth().currentUser.uid == "mxaElOHrfzYw0wchY07sm7Gw5FR2") {
      this.router.navigate(['/inicio-cajero'])
      return false;
    }
  }

  mostrarReporte(){
    
  }
}
