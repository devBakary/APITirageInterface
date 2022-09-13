import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component';
import { ListesComponent } from "./listes/listes.component";

const routes: Routes = [
  {
  path: "",
  redirectTo:"/tirage",
  pathMatch: 'full'
},
{path: "tirageA", component: AccueilComponent},
{path:"tirageT", component:TirageComponent},
{path:"tirageD", component: DetailTirageComponent},
{path:"tirageL", component: DetailListeComponent},
{path: "tirage", component: ListesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
