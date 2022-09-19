import { Component, OnInit } from '@angular/core';
import { ListeService } from "../liste.service";
import { PostulantTrierService } from '../postulant-trier.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  providers:[ListeService]

})
export class AccueilComponent implements OnInit {
  liste : any;
  listes: any;
  constructor(private listeService: ListeService) { }

  ngOnInit(){

    console.log('on init........')

    this.listeService.getListe().subscribe((data) =>{

      this.liste = data;

    })
    this.listeService.getListe().subscribe(data=>{
       this.listes=data;
    });

    this.services.postulantTrier().subscribe(data=>{
      this.postulistes = data;
    })
  }

}
