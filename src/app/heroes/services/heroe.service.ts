import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseUrl: string = environment.baseUrl;
  private host: string = environment.envHost;
  private key:string = environment.envKey; 
  
  constructor(private http: HttpClient) { }


  getHeroes(){
    localStorage.setItem('x-rapidapi-host',this.host!);
    localStorage.setItem('x-rapidapi-key',this.key!);
    const headers = new HttpHeaders()
    .set('x-rapidapi-host', localStorage.getItem('x-rapidapi-host') || '').set('x-rapidapi-key', localStorage.getItem('x-rapidapi-key') || '');

    console.log(headers);

    const url = `${this.baseUrl}/heroes `;
    return this.http.get(url, {headers});
  }

}
