import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionsVideoService {

  private SERVER = API_ENDPOINT;
  private url = `${this.SERVER}ebooking/token-paciente?appointmentid=`;
  //https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/ebooking/token-paciente?appointmentid=1251481

  constructor(public http: HttpClient) { }

  getPermissionsVideo(appointmentid) {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({ "Authorization": authorization });

    return this.http.get(this.url + appointmentid, { headers }).pipe(
      map((resp: any) => {
        return resp
      })/* .catch(e =>{
                console.log('error desde el servidor:',e);
              }) */
    )
  }
}
