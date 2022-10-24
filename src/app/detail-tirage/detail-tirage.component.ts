import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListeService } from "../liste.service";
import {  } from "../tirage";

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.scss'],
  providers:[ListeService]
})
export class DetailTirageComponent implements OnInit {

  postulantListe$!: any

  Untirage: any;
  nbTrier: any;
  pages: any;
  serachText:any;
  id: any
  date:  any
  libelle: any

  constructor(private listeService: ListeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  //const id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params =>{
    const id = params.get('id');
    console.log(id)
    this.id=id;
  })

   this.listeService.getPostulantByidTirage(this.id).subscribe(data =>{
    this.postulantListe$ =data;
   });

//Afficher Un tirage

this.listeService.getUnTirage(this.id).subscribe(data => {

  this.Untirage = data;

  //console.log(this.Untirage.libelle);
  // console.log("--------------------------gggggggggggggggggggg-----------------99");

})


this.listeService.getNbPostulantTrier(this.id).subscribe(data =>{
this.nbTrier = data;
})
  }

}
