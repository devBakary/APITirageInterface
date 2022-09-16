import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulantTrierService {

  constructor( private http: HttpClient) { }

  //la liste des postulants trier
  postulantTrier(): Observable<object>{

    return this.http.get("http://localhost:8080/postulantTrie/liste");
  }
}
