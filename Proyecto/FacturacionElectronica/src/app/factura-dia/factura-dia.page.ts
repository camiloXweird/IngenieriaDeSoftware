import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

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
    this.db.collection("facturas").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let item = document.createElement("ion-item");
          let button = document.createElement("ion-button");
          let id_documento = document.createTextNode(doc.id);
          item.appendChild(button);
          button.appendChild(id_documento);
          document.getElementById("lista").appendChild(item);
          //console.log(doc.id, " => ", doc.data());
        });
    });

  }

}
