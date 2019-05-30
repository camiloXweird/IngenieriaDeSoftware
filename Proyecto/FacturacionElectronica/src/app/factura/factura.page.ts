import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  constructor(public alertController: AlertController, public router: Router, public activeRoute: ActivatedRoute) { }

  db = firebase.firestore();

  factura = null;
  anno = null;
  mes = null;
  dia = null;

  estado_factura: string;
  nombre_cliente: String;
  telefono_cliente: String;
  correo_cliente: String;
  fecha: String;
  cantidad: number;
  estado: String;
  codigo_productro: string;
  numero_factura: string;
  valor_compra: number;

  ngOnInit() {
    this.factura = this.activeRoute.snapshot.paramMap.get('factura');
    this.anno = this.activeRoute.snapshot.paramMap.get('anno');
    this.mes = this.activeRoute.snapshot.paramMap.get('mes');
    this.dia = this.activeRoute.snapshot.paramMap.get('dia');
    this.db.collection(this.anno).doc(this.mes).collection(this.dia).doc(this.factura).get().then((doc) => {
      this.estado_factura = doc.get('estado');
    })
    this.mostrarNombre();
  }


  atras() {
    this.router.navigate(['/factura-dia'])
  }

  mostrarNombre() {
    this.db.collection(this.anno).doc(this.mes).collection(this.dia).doc(this.factura).onSnapshot((doc) => {
      this.nombre_cliente = doc.data().nombre;
      this.telefono_cliente = doc.data().telefono;
      this.correo_cliente = doc.data().correo;
      this.cantidad = doc.data().cantidad;
      this.codigo_productro = doc.data().codigo_producto;
      this.valor_compra = doc.data().valor_compra;
      this.fecha = doc.data().fecha;
      this.estado = doc.data().estado;
    });
  }

  cambiarEstado() {
    this.presentAlert();
  }

  async presentAlert() {
    if (this.estado_factura != 'Anulada') {
      const alert = await this.alertController.create({
        header: '¡Cuidado!',
        message: 'Estas apunto de cambiar el estado de tu factura, ¿estas seguro de realizar esta accion?',
        buttons: [{
          text: 'aceptar',
          handler: () => {
            this.db.collection(this.anno).doc(this.mes).collection(this.dia).doc(this.factura).update({
              estado: 'Anulada'
            });
          }
        }, {
          text: 'Cancelar',
          role: 'cancelar'
        }]
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: '¡Cuidado!',
        message: 'Estas apunto de cambiar el estado de tu factura, ¿estas seguro de realizar esta accion?',
        buttons: [{
          text: 'aceptar',
          handler: () => {
            this.db.collection(this.anno).doc(this.mes).collection(this.dia).doc(this.factura).update({
              estado: 'Valida'
            });
          }
        }, {
          text: 'Cancelar',
          role: 'cancelar'
        }]
      });

      await alert.present();
    }
  }
}
