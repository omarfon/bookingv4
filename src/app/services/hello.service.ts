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
 public especialidad;
 public dataEscogida;
 public price;
 public doctor;
 public plan;
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

  getDoctorsDispo(specialty: any, profesional: any, date1: any,  date2: any) {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({ "Authorization": authorization.authorization });
    return this.http
      .get(this.apiUrlOne + 'ebooking/fmt-centers/1/services/' + specialty + '/professionals/' + profesional +  '/availables?from_date=' + date1 + '&to_date=' + date2 , {headers});
  }


}
