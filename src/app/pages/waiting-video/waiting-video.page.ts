import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_IMAGES } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
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
    public permissionSrv: PermissionsVideoService) {
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


  getPermissionVideo() {
    let patientId = this.dataDoctor.appointmentId;
    this.permissionSrv.getPermissionsVideo(patientId).subscribe(data => {
      this.token = data.token
      if (this.token.length > 0) {
        /*  clearInterval(this.resultado); */
        const data = JSON.stringify(this.dataDoctor);
        this.router.navigate(['page-video', data]);
        clearInterval(this.resultado);
      } else {
      }
      console.log(data);
    }, err => {
      console.log(err)
    })
  }

  goToBack() {
    clearInterval(this.resultado);
    this.nav.back();
  }

}
