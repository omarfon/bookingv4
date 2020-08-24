import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DependensService {
  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}users/dependents`;
  private apiDelete = `${this.SERVER}users/removecontact?userId=`;
  private apiDatesParents = `${this.SERVER}ebooking/citas-paciente-contactos`;
  private apiOldDates = `${this.SERVER}ebooking/encuentrosPaciente`;
  private apiDatesParentsv2 = `${this.SERVER}/ebooking/encuentros-paciente-contacto`;

  constructor(public http: HttpClient) { }

  getDependens() {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({ "Authorization": authorization });

    return this.http.get(this.apiUrl, { headers }).pipe(
      map(data => {
        return data;
      })
    )
  }

  // con esta llamada estamos trayendo las citas de todos los dependientes
  getdependesDay() {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({ "Authorization": authorization });

    return this.http.get(this.apiDatesParents, { headers }).pipe(
      map(data => {
        return data;
      })
    )

  }

  getDependentDay(id) {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({ "Authorization": authorization });

    return this.http.get(this.apiDatesParentsv2 + `/${id}`, { headers }).pipe(
      map(data => {
        return data;
      })
    )
  }

  // con esta llamada se esta trayendo las citas pasadas del usuario validado
  getOldDependetsDay() {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({ "Authorization": authorization });

    return this.http.get(this.apiOldDates, { headers }).pipe(
      map(data => {
        return data;
      })
    )
  }

  // con esta llamada estamos eliminando de mi lista a los dependientes...
  deleteDepend(id) {
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({ "Authorization": authorization });

    return this.http.delete(this.apiDelete + `${id}`, { headers }).pipe(
      map(data => {
        return data;
      })

    )
  }

}
