import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudparentService {

  private SERVER = API_ENDPOINT;
  private apiUrl = `${this.SERVER}ebooking/appointments/createForUser/`;
  private api = `${this.SERVER}users/register-dependent/`;
  private apiCreate = `${this.SERVER}users/register`;
  private apiValidate = `${this.SERVER}users/validate-email/register`;

  constructor(public http: HttpClient, public afs: AngularFirestore) { } 

  createParentDate(subida, id, provisionId){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    let params = subida;
    params.provisions = [{"default":false, "id":provisionId}]

    return this.http.post(this.apiUrl + `${id}`, params , {headers}).pipe(
                          map((resp:any)=>{
                            return resp;
                          })
                     )
        }

  createParent(data){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    let params = data;

    return this.http.post(this.api , params , {headers}).pipe(
            map((resp:any)=>{
              return resp;
            })
    )
  }

  createNewUser(datos){

    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    let params = datos;

    return this.http.post(this.apiCreate , params , {headers}).pipe(
            map((resp:any)=>{
              return resp;
            })
         )
  }

  validateEmail(email){
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    let headers = new HttpHeaders({"Authorization": authorization.authorization});
    let params = email;

    return this.http.post(this.apiValidate , params , {headers}).pipe(
                    map((resp:any)=>{
                      return resp;
                    })
              )
       }

       saveDataCreate(data){
        const id = data.appointmentId;
        console.log('servicio',data,id);
        return this.afs.collection('citasBooking').doc(id.toString()).set({
          data
        },{merge: true})
      }

      searchDoctor(data){
        const authorization = JSON.parse(localStorage.getItem('authorization'));
        const ids = authorization.patientId;
        const id = ids + new Date();
        return this.afs.collection('doctorSearch').doc(id.toString()).set({
          data
        },{merge: true})
      }

      goToReserve(data){
        const authorization = JSON.parse(localStorage.getItem('authorization'));
        const ids = authorization.patientId;
        const id = ids + new Date().getDay;
        return this.afs.collection('especialidadReserva').doc(id.toString()).set({
          data
        },{merge: true})
      }

      goToRSpecialist(data){
        const authorization = JSON.parse(localStorage.getItem('authorization'));
        let id = authorization.patientId;
        return this.afs.collection('doctorSearch').doc(id.toString()).set({
          data
        },{merge: true})
      }

}
