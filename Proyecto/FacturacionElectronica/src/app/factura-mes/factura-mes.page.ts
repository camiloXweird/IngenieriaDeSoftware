import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-factura-mes',
  templateUrl: './factura-mes.page.html',
  styleUrls: ['./factura-mes.page.scss'],
})
export class FacturaMesPage implements OnInit {

  constructor(public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) { }

  ngOnInit() {
    return this.facturas();
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

  mostrarFactura(){
    let dia = new Date().getDay();
    let mes = new Date().getMonth();
    let anno = new Date().getFullYear();
    this.db.collection(""+anno).doc(""+mes).get().then(function (querySnapshot) {
    if(""+mes == '1'){
      
    }
  }
    )}

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
          "mostrarFactura();"
        } ;
          button.appendChild(id_documento);
          document.getElementById("facturas").appendChild(button);
          //console.log(doc.id, " => ", doc.data());
        });
    }).catch(() => {
      console.log("error");
    });
  }


}

