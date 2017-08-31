import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  nosotrosCargada:boolean = true;
  equipo:any[] = [];

  constructor( public http:Http ) {

    this.cargaInfo();
    this.cargaNosotros();

  }

  public cargaInfo(){

    this.http.get("assets/data/info.pagina.json")
        .subscribe( data=>{
          this.info=data.json();
          this.cargada=true;
        })

  }

  public cargaNosotros(){

    this.http.get("https://x3database-c2ca7.firebaseio.com/equipo.json")
        .subscribe( data=>{
          this.equipo=data.json();
          this.nosotrosCargada=true;
        })

  }

}
