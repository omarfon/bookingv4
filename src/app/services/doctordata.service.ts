import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DoctordataService {
  doctor;
  constructor(public afs:AngularFirestore) { }

  getDatesDoctor(idDoctor){
    let id = idDoctor;
    console.log(id);
    return this.afs.collection('doctors').doc(id).valueChanges();
  }

}
