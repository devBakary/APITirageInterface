import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component';
import { ListesComponent } from './listes/listes.component';
import { PostulantTrierComponent } from './postulant-trier/postulant-trier.component';

const routes: Routes = [
  {
  path: "",
  redirectTo:"/tirageA",
  pathMatch: 'full'
},
{path: "tirageA", component: AccueilComponent},
{path:"tirageT", component:TirageComponent},
{path:"tirageD/:id", component: DetailTirageComponent},
{path:"tirageL/:idliste", component: DetailListeComponent},
{path: "tirage", component: ListesComponent},
{path: "postulantT", component: PostulantTrierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
