import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListeService } from '../liste.service';

@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.scss']
})
export class DetailListeComponent implements OnInit {

  tirages$!: any;
  liste1 : any
  nbPostulant: any
  nbTirage : any
  pages: number=1;

  constructor(private service: ListeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const idliste = +this.route.snapshot.params["idliste"];



    this.service.getTirageByIdListe(idliste)
    .subscribe((data)=>{
      this.tirages$ = data
      console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"+data)
    })


    this.service.getUneListe(idliste)

    .subscribe((data) =>{
      this.liste1 = data;

    });

this.service.getNbPersonne(idliste).subscribe(data =>{
  this.nbPostulant = data;
})

this.service.getTirageSurUneListe(idliste).subscribe(data =>{
  this.nbTirage = data;
})







  }

}
