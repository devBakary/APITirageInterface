import { Component } from '@angular/core';
import {ListeService } from "./liste.service";
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ListeService]
})



export class AppComponent implements OnInit {
  title = 'APITirageInterface';
  liste : Object
  constructor(private listeService: ListeService){

  }
  ngOnInit(){
      console.log('on init........')
      this.listeService.getListe().subscribe((datas) =>{
        this.liste = datas;
      })
  }
}
