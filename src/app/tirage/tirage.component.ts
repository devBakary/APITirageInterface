import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Liste } from '../liste';
import { ListeService } from '../liste.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {


  /*form ={
    libelle:null,
    nbre: null,
    libele: null
  }

  forme = {
    libelle: null
  }*/
  formmodule!: FormGroup;
  file: any
  liste!: Liste;

  listes: any
  constructor( private service: ListeService, private http: HttpClient, private formB: FormBuilder ) { }

  ngOnInit(): void {

    this.formmodule= this.formB.group({
      libele:['', Validators.required],
      file:['', Validators.required]
    })
  }
  fileChange(e:any){
    this.file = e.target["file"][0]
  }
  importerliste(){
    this.liste= this.formmodule.value
    this.service.addList(this.liste.libele, this.file).subscribe(
      data =>{
        this.formmodule.reset()
      }
    )
  }

}
