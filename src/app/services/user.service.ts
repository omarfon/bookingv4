import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}users/`;
  private apiUrlDatos = `${this.SERVER}ebooking/`;
  private apiCreate = `${this.SERVER}users/register/`;

  constructor(public http: HttpClient) { }

  setDeviceToken(user_id, token) {
  	let url = this.apiUrl + user_id + '/token/' + token;
    return this.http.get(url).pipe(
                  map(data =>{
                    return data
                  })
              )

  }

  doSignIn(email, password){
    let params = {email:email, password: password }
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
    return this.http.post(this.apiUrl + 'login', params, {headers}).pipe(
                    map(data => {
                      return data
                    })
    )

  }
  doSignInforNewRegister(email, password){
    let params = {email:email, password: password , captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a"}
    // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
    return this.http.post(this.apiUrl + 'login', params).pipe(
                    map(data =>{
                      return data
                    })
    )
  }

  diSignInPassword(email, password){
    let params = {email:email, password: password};
    return this.http.post(this.apiUrl + 'login', params).pipe(
                    map(data =>{
                      return data
                    })
    )

  }

  doSignUp(params){
    return this.http.post(this.apiUrl + 'register', params).pipe(
                    map( data =>{
                      return data
                    })
    )
  }

  sendValidation(email){
    let params = {email: email};
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    console.log('params:', params);
    return this.http.post(this.apiUrl + 'validate-email/recovery', params, {headers}).pipe(
                    map(data =>{
                      return data
                    })
    )
  }

  recoveryLogin(datos){
    let params = {code: datos.code, email: datos.email, id: datos.id, password: datos.password, app: 'ebooking'};
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    return this.http.post(this.apiUrl + 'login-recovery', params, {headers}).pipe(
                    map(data => {
                      return data
                    })
    )
  }


  changePassword(password, passwordNew){
    let params = {password: password, passwordNew: passwordNew };
    // console.log('los paramasque cambian la contraseña:', params);
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    return this.http.put(this.apiUrl + 'update-password', params, {headers}).pipe(
                    map(data => {
                      return data
                    })
              );
  }

  getDatosPaciente(){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    return this.http.get(this.apiUrlDatos + `datos-paciente`, {headers}).pipe(
                    map(data => {
                      return data
                    })

    )
  }
  createNewUser(datos){
    // console.log('los datos de register:', datos)
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    let params = datos;
    // console.log('los datos de register:', datos)
    // params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]
    return this.http.post(this.apiCreate , params , {headers}).pipe(  
              map((resp:any)=>{
                return resp;
              })
    )
  }

}
