import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public datosPaciente;
  constructor(public userSrv: UserService) { }

  ngOnInit() {
    this.getDatosPaciente();
  }

  getDatosPaciente() {
    this.userSrv.getDatosPaciente().subscribe(data => {
      this.datosPaciente = data;
      console.log(this.datosPaciente)
    })
  }

}
