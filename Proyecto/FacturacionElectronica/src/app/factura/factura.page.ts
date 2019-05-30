import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  constructor(public router: Router, public activeRoute: ActivatedRoute) { }

  db = firebase.firestore();

  factura = null;

  nombre_cliente: String;
  telefono_cliente: String;
  correo_cliente: String;

  cantidad: number;
  codigo_productro: string;
  numero_factura: string;
  valor_compra: number;

  ngOnInit() {
    this.factura = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.factura);
    this.mostrarNombre();
  }


  atras() {
    this.router.navigate(['/factura-dia'])
  }

  mostrarNombre() {
    this.db.collection("facturas").doc("2019-05-23T08:44:39.155-05:00").get().then((querySnapshot) => {
      this.nombre_cliente = querySnapshot.data().nombre;
      this.telefono_cliente = querySnapshot.data().telefono;
      this.correo_cliente = querySnapshot.data().correo;
      this.cantidad = querySnapshot.data().cantidad;
      this.codigo_productro = querySnapshot.data().codigo_producto;
      this.valor_compra = querySnapshot.data().valor_compra;
    });
  }
}
