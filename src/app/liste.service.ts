import { Injectable } from '@angular/core';
//importer Httpclient
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  //ajouter les readonly
  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_Liste = "/liste/afficher"

  constructor(private http: HttpClient) { }

  getListe():Observable<any>{
    return this.http.get<object>("http://localhost:8080/liste/afficher");//this.API_URL+this.ENDPOINT_Liste
  }

  getTirageByIdListe(idliste: number):Observable<object>{
    return this.http.get<object>(`http://localhost:8080/tirage/tt/${idliste}`);
  }
}
