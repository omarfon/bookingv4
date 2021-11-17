import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}ebooking/`;

  constructor(public http: HttpClient) { }

  createAppointment(subida, provisionId){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    let params = subida;
    params.provisions = [{"default":false, "id":`${provisionId}`}]

    // console.log('appointment:',subida, params);
    return this.http.post(this.apiUrl + 'appointments/create', params, {headers}).pipe(
      map(data =>{
        return data;
      })
    )
  }

  getAppointmentsPeruser(){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});

    return this.http.get(this.apiUrl + 'appointments/patient', {headers}).pipe(
      map((resp:any) =>{
          return resp;
      })
    )
  }

  destroyAppointment(appointment) {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    // appointment.email = localStorage.getItem('emailUser'); appointment.password = localStorage.getItem('passUser');

    return this.http.delete(this.apiUrl + `appointments/${appointment.appointmentId}`, {headers}).pipe(
                   map((resp:any) =>{
                    return resp;
                 })
             )
       }

  destroyAppointmentContact(appointment) {
    const patientId = appointment.patient.id;
    const appointmentId = appointment.appointmentId;
    console.log('lo que se va a eliminar cita fmiliar', patientId, appointmentId);
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    // appointment.email = localStorage.getItem('emailUser'); appointment.password = localStorage.getItem('passUser');

    return this.http.delete(this.apiUrl + `appointments/patient-contacts/${patientId}/${appointmentId}/`, {headers}).pipe(
      map((resp:any) =>{
          return resp;
      })
    )
}

}