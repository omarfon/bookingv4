import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_IMAGES } from 'src/environments/environment';
import { NavController, AlertController } from '@ionic/angular';
import { PermissionsVideoService } from 'src/app/services/permissions-video.service';


@Component({
  selector: 'app-waiting-video',
  templateUrl: './waiting-video.page.html',
  styleUrls: ['./waiting-video.page.scss'],
})
export class WaitingVideoPage implements OnInit {

  public dataDoctor;
  public SERVERImage = API_IMAGES;
  token: any;
  resultado;

  constructor(public routes: ActivatedRoute,
    public router: Router,
    public nav: NavController,
    public permissionSrv: PermissionsVideoService,
    public alertCtrl: AlertController) {
    const data = this.routes.snapshot.paramMap.get('data');
    this.dataDoctor = JSON.parse(data);
    console.log('thisdataDoctor:', this.dataDoctor);
  }

  ngOnInit() {
    this.verifyToken();
  }

  verifyToken() {
    this.resultado = setInterval(() => {
      this.getPermissionVideo();
    }, 10000);

    /*  if (this.token != '') {
       clearInterval(this.resultado);
     } */
  }
  errorHandler(event) {
    event.target.src.style = "background-image:url(https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png); background-repeat: no-repeat; background-size:cover; height: 100vh;"
  }


  getPermissionVideo() {
    let patientId = this.dataDoctor.patientId;
    let appoinmentid = this.dataDoctor.appointmentId;
    if (this.dataDoctor.familiar === true) {
      this.permissionSrv.getAuthoParent(appoinmentid, patientId).subscribe(async data => {
        this.token = data.token
        if (this.token === "") {
          console.log('aun no llega token');
        }
        else if (this.token === 'finalizado') {
          this.router.navigate(['home']);
          const alert = await this.alertCtrl.create({
            header: 'Cita Terminada',
            subHeader: 'Esta cita ya ha finalizado',
            buttons: [
              {
                text: 'ok'
              }
            ]
          });
          await alert.present();
          clearInterval(this.resultado);
        }
        else {
          /*  clearInterval(this.resultado); */
          const data = JSON.stringify(this.dataDoctor);
          this.router.navigate(['page-video', data]);
          clearInterval(this.resultado);
        }
        console.log(data);
      }, err => {
        console.log(err)
      })
    } else {
      this.permissionSrv.getPermissionsVideo(appoinmentid).subscribe(async data => {
        this.token = data.token
        if (this.token === "") {
          console.log('aun no llega token');
        }
        else if (this.token === 'finalizado') {
          this.router.navigate(['home']);
          const alert = await this.alertCtrl.create({
            header: 'Cita Terminada',
            subHeader: 'Esta cita ya ha finalizado',
            buttons: [
              {
                text: 'ok'
              }
            ]
          });
          await alert.present();
          clearInterval(this.resultado);
        }
        else {
          /*  clearInterval(this.resultado); */
          const data = JSON.stringify(this.dataDoctor);
          this.router.navigate(['page-video', data]);
          clearInterval(this.resultado);
        }
        console.log(data);
      }, err => {
        console.log(err)
      })
    }
  }

  goToBack() {
    clearInterval(this.resultado);
    this.nav.back();
  }

}
