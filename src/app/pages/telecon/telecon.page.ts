import { Component, OnInit } from '@angular/core';
import { GetDatesTeleService } from 'src/app/services/get-dates-tele.service';


@Component({
  selector: 'app-telecon',
  templateUrl: './telecon.page.html',
  styleUrls: ['./telecon.page.scss'],
})
export class TeleconPage implements OnInit {

  public consultas;
  public sinconsultas: boolean = false;
  constructor(public tcs: GetDatesTeleService) { }

  ngOnInit() {
    this.getDatesTele();
  }

  getDatesTele(){
    let idUser = localStorage.getItem('idTokenUser');
    this.tcs.getDatesConsulta(idUser).subscribe(data => {
      this.consultas = data;
      console.log(this.consultas);
    })
  }
}
