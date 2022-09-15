import { Injectable } from '@angular/core';
//importer Httpclient
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  /*ajouter les readonly
  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_Liste = "/liste/afficher"*/

  constructor(private http: HttpClient) { }

  //Afficher toute les liste
  getListe():Observable<any>{
    return this.http.get<object>("http://localhost:8080/liste/afficher");//this.API_URL+this.ENDPOINT_Liste
  }

  //Afficher tout les tirage d'une liste

  getTirageByIdListe(idliste: number):Observable<object>{
    return this.http.get<object>(`http://localhost:8080/tirage/tt/${idliste}`);
  }

  //Afficher les postulant tirer

  getPostulantByidTirage(idtirage: number):Observable<object>{
    return this.http.get<object>(`http://localhost:8080/postulantTrie/${idtirage}`);
  }
  //Afficher une seule liste

  getUneListe(idliste: number):Observable<any>{
    return this.http.get(`http://localhost:8080/liste/${idliste}`);
  }

  //Afficher detail du tirage
  getUnTirage(idtirage: number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/tirage/${idtirage}`);
  }

  //Afficher le nombre de personne sur une liste
  getNbPersonne(idliste: number):Observable<any>{
return this.http.get<any>(`http://localhost:8080/postulant/${idliste}`);
  }

  getTirageSurUneListe(idliste: number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/tirage/nbr/${idliste}`);
  }
}
