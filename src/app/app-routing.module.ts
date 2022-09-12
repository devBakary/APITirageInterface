import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';


const routes: Routes = [
  {
  path: "",
  redirectTo:"/tirageA",
  pathMatch: 'full'
},
{path: "tirageA", component: AccueilComponent},
{path:"tirageT", component:TirageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
