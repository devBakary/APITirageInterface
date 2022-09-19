import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tirage } from './tirage';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor( private http: HttpClient ) { }

  //methode pour l'importation
  importer(libele: string, file: any): Observable<any>{
   let data= new FormData();
    data.append("file", file)
    return this.http.post<void>(`http://localhost:8080/postulant/importe/${libele}`, data)
  }

  //methode pour avoir la liste des listes
  getListe(): Observable<any>{
    //acces a httpclient
    //importation de httpclient dans app.module.ts
    return this.http.get(`http://localhost:8080/liste/afficher`)
  }

  //pour faire le tirage
  tirage(tirage:Tirage, libele: string, nbre: number ):Observable<any>{
    // let data = new Tirage();
    return this.http.post<any>(`http://localhost:8080/tirage/createTirage/${libele}/${nbre}`, tirage)
  }


}
