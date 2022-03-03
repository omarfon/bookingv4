import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctordataService {
  private SERVER = API_ENDPOINT;
  doctor;
  constructor(public afs:AngularFirestore, public http: HttpClient) { }

  getDatesDoctor(idDoctor){
    let id = idDoctor;
    console.log(id);
    return this.afs.collection('doctors').doc(id).valueChanges();
  }

  getDoctorInfo(id){
    return this.http.get(this.SERVER + `ebooking/doctors/getDoctorByProfessionalId/${id}`).pipe(
      map(data => {
        return data
      }, err => {
        return err
      })
    )
  }


  upSession(data){
    let origin = 'session'
    let params = data;
    return this.http.post(this.SERVER + `ebooking/log/${origin}`, params).pipe(
      map(data => {
        return data
      }, err => {
        return err
      })
    )
  }



}
