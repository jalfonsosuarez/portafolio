import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http) {
    this.cargarProductos();
  }

  public cargarProductos(){

    this.cargando = true;

    if( this.productos.length === 0){
      let url = 'https://x3database-c2ca7.firebaseio.com/productos_idx.json';

      this.http.get( url )
          .subscribe( res => {
            // console.log( res.json() );
            this.productos = res.json();
            this.cargando = false;
          })
    }

  }

}
