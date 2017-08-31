import { RouterModule, Routes } from '@angular/router';
import { AboutoComponent,
         PortafolioComponent,
         ProductoComponent } from "./components/index.paginas";

const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutoComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
