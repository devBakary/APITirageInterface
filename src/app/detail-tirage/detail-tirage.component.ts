import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListeService } from "../liste.service";

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.scss'],
  providers:[ListeService]
})
export class DetailTirageComponent implements OnInit {

  postulantListe$!: any

  tirage: any;
  nbTrier: any;
  pages: any;
  serachText:any;

  constructor(private listeService: ListeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  const idtirage = +this.route.snapshot.params["idtirage"];
  this.postulantListe$ = this.listeService.getPostulantByidTirage(idtirage);

//Afficher Un tirage

this.listeService.getUnTirage(idtirage).subscribe((data)=>{

  this.tirage=data;
})


this.listeService.getNbPostulantTrier(idtirage).subscribe(data =>{
  this.nbTrier = data;
})
  }

}
