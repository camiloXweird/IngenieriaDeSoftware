import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { Router, Routes } from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-factura-dia',
  templateUrl: './factura-dia.page.html',
  styleUrls: ['./factura-dia.page.scss'],
})
export class FacturaDiaPage implements OnInit {

  constructor(public navCtrl: NavController, public authservice: AuthService, public actionSheetController: ActionSheetController
    , public router: Router) { }

  db = firebase.firestore();
  dato: string;

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
    let dia = 4;// new Date().getDay();
    let mes = 4;//new Date().getMonth();
    let anno = 2019;//new Date().getFullYear();
    this.db.collection("" + anno).doc(mes + "").collection("" + dia).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let item = document.createElement('ion-item');
        let button = document.createElement('ion-button');
        button.color = 'danger';
        button.expand = 'block';
        let lista = document.getElementById('facturas');
        let textoButton = document.createTextNode(doc.id);
        button.onclick = () => {
        this.dato = button.innerHTML;
          this.router.navigate(['/factura', this.dato]);//enviar datos
        };
        lista.appendChild(item);
        item.appendChild(button);
        button.appendChild(textoButton);
      });
    });
  }
}