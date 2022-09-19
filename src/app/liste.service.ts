import { Injectable } from '@angular/core';
//importer Httpclient
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Tirage } from './tirage';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  /*ajouter les readonly
  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_Liste = "/liste/afficher"*/

  constructor( private http: HttpClient ) { }

  //methode pour l'importation
  importer(libele: string, file: any): Observable<any>{
   let data= new FormData();
    data.append("file", file)
    return this.http.post<void>(`hhttp://localhost:8080/postulant/importe/${libele}`, data)
  }

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

  //Affiche le nombre de tirage sur une liste
  getTirageSurUneListe(idliste: number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/tirage/nbr/${idliste}`);
  }

  getNbPostulantTrier(idtirage: number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/postulantTrie/nbrTrier/${idtirage}`);
  }

  //pour faire le tirage
  tirage(tirage:Tirage, libele: string, nbre: number ):Observable<any>{
    // let data = new Tirage();
    return this.http.post<any>(`http://localhost:8080/tirage/createTirage/${libele}/${nbre}`, tirage)
  }


}
