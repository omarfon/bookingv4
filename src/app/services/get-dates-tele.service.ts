import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class GetDatesTeleService {
  private consultas: AngularFirestoreCollection<any>

  constructor(public afs: AngularFirestore) {
    this.consultas = afs.collection<any>('consultas');
  }


  getDatesConsulta(idUser) {
    let id = parseInt(idUser);
    return this.afs.collection('consultas', ref => ref.where('uid', '==', id)).valueChanges();
  }
}
