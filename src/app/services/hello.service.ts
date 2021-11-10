import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  servicios: any[] = [];
  doctores: any[] = [];

  private SERVER = API_ENDPOINT;
 private apiUrl = `${this.SERVER}graphql`;
 private apiUrlOne = `${this.SERVER}`;

  constructor(public http: HttpClient) { }

  getServicios(){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    const center_id = 1;
    return this.http.get(this.apiUrlOne + `ebooking/fmt-centers/${center_id}/services`, {headers}).pipe(
              map((resp:any)=>{
                return resp;
            })
    )
}


  getDoctorsPerId(id){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    const center_id = 1;

    return this.http.get(this.apiUrlOne + `ebooking/fmt-centers/${center_id}/services/${id}/professionals` ,  {headers}).pipe(
                    map((resp:any)=>{
                    this.doctores = resp.centers[0].services[0].professionals;
                    return this.doctores;
                    })
            )
  }

  getAvailablesPerDoctor(id, serviceId, fromDate, toDate){
 /*    console.log('datos en el provider:', id ,serviceId, fromDate); */
 const authorization = JSON.parse(localStorage.getItem('authorization'));
 let headers = new HttpHeaders({"Authorization": authorization.authorization});

    const center_id = 1;
    return this.http.get(this.apiUrlOne + `ebooking/fmt-centers/${center_id}/services/${serviceId}/professionals/${id}/availables?from_date=${fromDate}&to_date=${toDate}`,  {headers}).pipe(
            map((resp:any)=>{
                return resp.centers[0].services[0].professionals[0].availables;
              })

           )
  }

}
