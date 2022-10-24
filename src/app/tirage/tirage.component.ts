import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Liste } from '../liste';
import { ListeService } from '../liste.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tirage } from '../tirage';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {



  //dec pour importer
  formmodule!: FormGroup;

  //dec pour faire le tirage
  formmodules!: FormGroup;

  file: any;
  liste!: Liste;
  tirage!: any;


  id:number=0;
  libelle:string='';
  libele:string=''
  date!:Date;
  nbre:number=0;
  msg: any;

  //pour afficher la liste
  listes: any
  constructor( private service: ListeService, private http: HttpClient, private formB: FormBuilder ) { }

  tiraObj:Tirage={
    id: 0,
    date: new Date(),
    libelle: '',
    nbre: 0
  }

  ngOnInit(): void {

    this.formmodule= this.formB.group({
      libele: ['', Validators.required],
      file:['', Validators.required]
    })

  }
  fileChange(e:any){
    this.file = e.target["files"][0]
  }
  importerliste(){
    this.liste= this.formmodule.value
    this.service.importer(this.liste.libele, this.file).subscribe(
      data =>{
        this.formmodule.reset()
      }
    )
  }

  resetForm(){
    this.libele='',
    this.libelle='',
    this.nbre=0
  }

//methode pour faire le tirage!
  faireTirage(){
    // this.tirage= this.formmodules.value
    this.tiraObj.libelle=this.libelle;
    this.service.tirage(this.tiraObj, this.libele, this.nbre ).subscribe(
      data=>{
        this.resetForm()
        this.msg = "tirage effectué avec succes!"
      }
    )
  }

}
