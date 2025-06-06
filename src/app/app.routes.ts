import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartidosComponent } from './pages/partidos/partidos.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'partidos', component: PartidosComponent}
];
