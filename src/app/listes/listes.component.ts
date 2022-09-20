import { Component, OnInit } from '@angular/core';

import { ListeService } from "../liste.service";

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss'],

  providers:[ListeService]
})
export class ListesComponent implements OnInit {

  p: number = 1

  idliste:any;
  file!: any;
  listes: any;
  url:string = '/tirageL';
  det: any

  constructor(private service: ListeService) { }

  ngOnInit(): void {
    this.service.getListe().subscribe(data=>{
       this.listes=data;

    });

    this.service.getTirageSurUneListe(this.idliste).subscribe(data =>{
      this.det = data;
    })


  }

}
