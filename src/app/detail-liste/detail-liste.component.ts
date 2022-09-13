import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListeService } from '../liste.service';

@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.scss']
})
export class DetailListeComponent implements OnInit {

  tirages$!: Observable<any>;

  constructor(private service: ListeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const idliste = +this.route.snapshot.params["idliste"];
    this.tirages$ = this.service.getTirageByIdListe(idliste);
  }

}
