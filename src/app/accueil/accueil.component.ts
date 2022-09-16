import { Component, OnInit } from '@angular/core';
import { ListeService } from "../liste.service";
import { PostulantTrierService } from '../postulant-trier.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  listes: any
  postulistes: any
  constructor(private service: ListeService, private services: PostulantTrierService) { }

  ngOnInit(): void {
    this.service.getListe().subscribe(data=>{
       this.listes=data;
    });

    this.services.postulantTrier().subscribe(data=>{
      this.postulistes = data;
    })
  }

}
