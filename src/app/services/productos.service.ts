import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  prodFiltrado:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http) {
    this.cargarProductos();
  }

  public buscarProducto( termino:string ){


    if( this.productos.length === 0 ){
      this.cargarProductos().then( ()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos( termino:string ){

    this.prodFiltrado = [];
    termino = termino.toLowerCase();

    console.log(termino);

    this.productos.forEach( prod => {
      if( prod.categoria.indexOf( termino ) >= 0  ||
          prod.titulo.toLowerCase().indexOf( termino ) >= 0 ){

        this.prodFiltrado.push( prod );
      }
    } )

  }

  public cargarProductos(){

    this.cargando = true;

    let promesa = new Promise( (resolve, reject)=>{

      // if( this.productos.length === 0){
        let url = 'https://x3database-c2ca7.firebaseio.com/productos_idx.json';

        this.http.get( url )
        .subscribe( res => {
          // console.log( res.json() );
          this.productos = res.json();
          this.cargando = false;
          resolve();
        });
      // }

    });

    return promesa;
  }

  public cargarProducto( id:string ){

    let url = `https://x3database-c2ca7.firebaseio.com/productos/${id}.json`;

    return this.http.get( url );
  }

}
