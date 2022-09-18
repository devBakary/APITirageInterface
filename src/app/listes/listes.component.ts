import { Component, OnInit } from '@angular/core';
import { ListeService } from "../liste.service";

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent implements OnInit {

  file!: any;


  listes: any
  constructor(private service: ListeService) { }

  ngOnInit(): void {
    this.service.getListe().subscribe(data=>{
       this.listes=data;
    });

  }

}
