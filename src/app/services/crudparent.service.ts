import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudparentService {

  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}ebooking/appointments/createForUser/`;
  private api = `${this.SERVER}users/register-dependent/`;
  private apiCreate = `${this.SERVER}users/register`;
  private apiValidate = `${this.SERVER}users/validate-email/register`;

  constructor(public http: HttpClient) { } 

  createParentDate(subida, id, provisionId){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = JSON.parse(subida);
    params.provisions = [{"default":false, "id":provisionId}]

    return this.http.post(this.apiUrl + `${id}`, params , {headers}).pipe(
                          map((resp:any)=>{
                            return resp;
                          })
                     )
        }

  createParent(data){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = data;

    return this.http.post(this.api , params , {headers}).pipe(
            map((resp:any)=>{
              return resp;
            })
    )
  }

  createNewUser(datos){

    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = datos;

    return this.http.post(this.apiCreate , params , {headers}).pipe(
            map((resp:any)=>{
              return resp;
            })
         )
  }

  validateEmail(email){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = email;

    return this.http.post(this.apiValidate , params , {headers}).pipe(
                    map((resp:any)=>{
                      return resp;
                    })
              )
       }

}
