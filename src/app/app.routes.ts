import { RouterModule, Routes } from '@angular/router';
import { AboutoComponent,
         PortafolioComponent,
         ProductoComponent } from "./components/index.paginas";

const APP_ROUTES: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
