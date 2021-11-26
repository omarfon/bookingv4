import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';
import { DOCTORSRMICRO } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  servicios: any[] = [];
  doctores: any[] = [];

 private SERVER = API_ENDPOINT;
 private apiUrl = `${this.SERVER}graphql`;
 private apiUrlOne = `${this.SERVER}`;
 private apiDoctores = DOCTORSRMICRO;
 public especialidad;
 public dataEscogida;
 public price;
 public doctor;
 public plan;
 public recoveryData;
 public dataSend;
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

getSpecialtys() {
  console.log('data')
  const authorization = JSON.parse(localStorage.getItem('authorization'));
  let headers = new HttpHeaders({ "Authorization": authorization.authorization });
  return this.http
    .get(this.SERVER + 'ebooking/fmt-centers/all/services', {headers});
}


//TRAE A UN GRUPO DE DOCTORES DE LA MISMA ESPECIALIDAD
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

  //TRAE A UN GRUPO DE DOCTORES CON LA MISMA ESPECIALIDAD CON AVAILABLES
  getDoctorsSpecialty(id, date1: any, date2: any) {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({ "Authorization": authorization.authorization});
    return this.http
      .get(this.apiUrlOne + 'ebooking/fmt-centers/1/services/' + id + '/professionals/all/availables?from_date=' + date1 + '&to_date=' + date2, {headers});
  }

  getDoctorsSpecialtyCard(id, date1: any, date2: any) {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({ "Authorization": authorization.authorization});
    return this.http
      .get(this.apiDoctores + 'ebooking/fmt-centers/1/services/' + id + '/professionals/all/availables?from_date=' + date1 + '&to_date=' + date2, {headers});
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

  getAllDoctors(){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({ "Authorization": authorization.authorization });
    return this.http.get(this.SERVER + `ebooking/info-profesionales`, {headers}).pipe(
      map( data => {
        return data
      }, err => {
        return err
      })
    )
  }

  //TRAE LA DISPONIBILIDAD DE UN DOCTOR ESPECIFICO
  getDoctorsDispo(specialty: any, profesional: any, date1: any,  date2: any) {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({ "Authorization": authorization.authorization });
    return this.http
      .get(this.apiUrlOne + 'ebooking/fmt-centers/1/services/' + specialty + '/professionals/' + profesional +  '/availables?from_date=' + date1 + '&to_date=' + date2 , {headers});
  }

  getHoursPerDay(data){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({ "Authorization": authorization.authorization});
    let params = data
    return this.http.post(this.apiDoctores + 'ebooking/slots/availables-hour', params, {headers})
  }


}
