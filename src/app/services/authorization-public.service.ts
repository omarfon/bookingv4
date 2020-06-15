import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationPublicService {

  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}users/public-authorization`;

  constructor(public http: HttpClient) { }

  getKey(){
    return this.http.get( this.apiUrl).pipe(
      map(resp =>{
        return resp
      })
    );
                    
  }


  
}
