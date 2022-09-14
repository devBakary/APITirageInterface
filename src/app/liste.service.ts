import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor( private http: HttpClient ) { }
  //methode pour l'importation
  addList(libele: string, file: any): Observable<any>{
   let data= new FormData();
    data.append("file", file)
    return this.http.post<void>(`http://localhost:8080/postulant/importe/${libele}`, data)
  }

  //methode pour avoir la liste des listes
  getListe(): Observable<any>{
    //acces a httpclient
    //importation de httpclient dans app.module.ts
    return this.http.get(`http://localhost:8080/liste/lire`)
  }


}
