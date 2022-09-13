import { Component, OnInit } from '@angular/core';
import { ListeService } from "../liste.service";


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  listes: any
  constructor(private service: ListeService) { }

  ngOnInit(): void {
    this.service.getListe().subscribe(data=>{
       this.listes=data;
    });
  }

}
