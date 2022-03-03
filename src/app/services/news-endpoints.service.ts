import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsEndpointsService {

  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}users/`;
  private newLogin = this.SERVER + 'users/newLogin';
  private reniec = 'https://apiperu.dev/api/dni/';

  constructor(public http: HttpClient) { }


  newLoginWithDni(documentType:number, documentNumber: string, password: string){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    const app = "ebooking"
    let params = {documentType, documentNumber, password, app};
     return this.http.post(this.newLogin, params, {headers}).pipe(
       map(resp => {
         return resp
       }), err => {
        return err
    })
  }

  getPublicKey(dni:string){
    const auth_token = '30dcd655149906b1469ac3913125f30862b0ab1b4bc0425f8256166d98a82d02';
    const cabecera = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(this.reniec + dni, {headers: cabecera})
    }

}
