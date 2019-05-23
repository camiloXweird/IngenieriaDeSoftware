import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { FacturaPage } from '../factura/factura.page';


@Component({
  selector: 'app-factura-dia',
  templateUrl: './factura-dia.page.html',
  styleUrls: ['./factura-dia.page.scss'],
})
export class FacturaDiaPage implements OnInit {

  constructor(public navCtrl: NavController,public authservice: AuthService, public actionSheetController: ActionSheetController
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
        let item = document.createElement('ion-item');
        let label = document.createElement('ion-input');
        let button = document.createElement('ion-button');
        let textoLabel = document.createTextNode(doc.id);
        let textoButton = document.createTextNode('ver factura');
        label.disabled = true;
        label.appendChild(textoLabel);
        item.appendChild(label);
        button.click = this.mostrarFactura();
        button.appendChild(textoButton);
        item.appendChild(button);
          document.getElementById("facturas").appendChild(item);
          //console.log(doc.id, " => ", doc.data());
        });
    }).catch((error) => {
      console.log("error", error);
    });
  }

  mostrarFactura(){
    console.log("ok");
  }

}