import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-abouto',
  templateUrl: './abouto.component.html'
})
export class AboutoComponent {

  constructor( public _is:InformacionService ){

  }

}
