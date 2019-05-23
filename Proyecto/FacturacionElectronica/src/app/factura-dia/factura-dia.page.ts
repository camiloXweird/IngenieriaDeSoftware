import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { FacturaMesPage } from '../factura-mes/factura-mes.page';


@Component({
  selector: 'app-factura-dia',
  templateUrl: './factura-dia.page.html',
  styleUrls: ['./factura-dia.page.scss'],
})
export class FacturaDiaPage implements OnInit {

  constructor(public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) { }

  db = firebase.firestore();
  ngOnInit() {
    return this.facturas();
  }

  atras() {
    if (firebase.auth().currentUser.uid == "K4hqU8cheFfVcSWQvygD99TQPQ23") {
      this.router.navigate(['/administrador'])
      return false;
    } if (firebase.auth().currentUser.uid == "mxaElOHrfzYw0wchY07sm7Gw5FR2") {
      this.router.navigate(['/inicio-cajero'])
      return false;
    }

  }

  facturas() {
    let dia = new Date().getDay();
    let mes = new Date().getMonth();
    let anno = new Date().getFullYear();
    this.db.collection(""+anno).doc(""+mes).collection(""+dia).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let button = document.createElement("ion-button");
        let id_documento = document.createTextNode(doc.id);
        button.color = 'medium';
        button.expand = 'full';
        button.fill = 'clear';
        button.onclick = () => {
          console.log()
        } ;
          button.appendChild(id_documento);
          document.getElementById("facturas").appendChild(button);
          //console.log(doc.id, " => ", doc.data());
        });
    }).catch(() => {
      console.log("error");
    });
  }

  mostrarFactura(){

  }

}