import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancerService {
  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}ebooking/`;

  constructor(public http: HttpClient) { }

  getFinanciers(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + 'planes-paciente', {headers}).pipe(
                    map(data => {
                      return data
                  })
                )
  }

  getFinancier(financier_id) {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + `${financier_id}`, {headers}).pipe(
                  map(data => {
                    return data
                })
              )
  }

  getPrice(servicio_id, prestacion_id, producto_id, medico_id, proposed_date) {
    // let params = { proposed_date: proposed_date, center_id: center_id, basic_service_id: basic_service_id, doctor_id: doctor_id }
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + `citas/precio-prestacion?servicio_id=${servicio_id}&prestacion_id=${prestacion_id}&producto_id=${producto_id}&medico_id=${medico_id}&fecha=${proposed_date}`, {headers}).pipe(
                    map(data => {
                      return data
                    })
                  )
  }

  getPlanesPaciente(centerId, servicio_id, prestacion_id, medico_id, proposed_date){
      const authorization = localStorage.getItem('authorization');
      let headers = new HttpHeaders({"Authorization":authorization});

      return this.http.get(this.apiUrl + `planes-paciente-precio-prestacion?center_id=${centerId}&servicio_id=${servicio_id}&prestacion_id=${prestacion_id}&medico_id=${medico_id}&fecha=${proposed_date}`, {headers}).pipe(
                      map(data=>{
                        return data
                      })
                )
        }

  getplanesContacto(paciente_id, servicio_id, prestacion_id, medico_id, proposed_date ){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization":authorization});

    return this.http.get(this.apiUrl + `planes-paciente-contacto-precio-prestacion?paciente_id=${paciente_id}&servicio_id=${servicio_id}&prestacion_id=${prestacion_id}&medico_id=${medico_id}&fecha=${proposed_date}`, {headers}).pipe(
                map(data=>{
                  return data
                })
            )
    }

  getProvisions(centerId, basicServiceId){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization":authorization});

    return this.http.get(this.apiUrl + `centers/${centerId}/basicservices/${basicServiceId}/provisions`, {headers}).pipe(
                    map(data=>{
                      return data
                    })
              )
  }
  
}
