import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  providers:[ListeService]

})
export class AccueilComponent implements OnInit {
  liste : any;

  constructor(private listeService: ListeService) { }

  ngOnInit(){

    console.log('on init........')

    this.listeService.getListe().subscribe((data) =>{

      this.liste = data;

    })
    this.service.getListe().subscribe(data=>{
       this.listes=data;
    });
}
}
