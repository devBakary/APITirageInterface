import { Component, OnInit } from '@angular/core';
import { PostulantTrierService } from '../postulant-trier.service';

@Component({
  selector: 'app-postulant-trier',
  templateUrl: './postulant-trier.component.html',
  styleUrls: ['./postulant-trier.component.scss']
})
export class PostulantTrierComponent implements OnInit {


  listes: any
  constructor(private service: PostulantTrierService) { }

  ngOnInit(): void {
    this.service.postulantTrier().subscribe(data=>{
      this.listes = data;
    })
  }

}
