import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataBasicService {

  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}users/`;

  constructor(public http: HttpClient) { }

  getGenders(){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.autorization});
    return this.http.get(this.apiUrl + 'genders', {headers}).pipe(
                     map(data =>{
                      return data;
                    })

               )
  }

  getDocuments(){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});

    return this.http.get(this.apiUrl + 'documenttypes', {headers}).pipe(
                  map(data =>{
                    return data;
                  })
             )
          }
          
}
