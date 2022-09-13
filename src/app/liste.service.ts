import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor( private http: HttpClient ) { }
  getListe(): Observable<any>{

    //acces a httpclient
    //importation de httpclient dans app.module.ts
    return this.http.get("http://localhost:8080/liste/lire")
  }
}
