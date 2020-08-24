import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { API_IMAGES } from 'src/environments/environment';
import { ToastController, AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsVideoService } from 'src/app/services/permissions-video.service';

@Component({
  selector: 'app-my-date',
  templateUrl: './my-date.page.html',
  styleUrls: ['./my-date.page.scss'],
})
export class MyDatePage implements OnInit {
  public task;
  public tasks;
  public SERVERImage = API_IMAGES;
  public appointmentid;

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public appointmentProvider: AppoinmentService,
    public modalCtrl: ModalController,
    public router: Router,
    public routes: ActivatedRoute,
    public permissionSrv: PermissionsVideoService) {



    let data = this.routes.snapshot.paramMap.get('datos');
    this.task = JSON.parse(data);
    console.log('task en ', this.task);
    /* this.date = this.dataArmada.appointmentId; */
  }

  ngOnInit() {
  }

  errorHandler(event) {
    event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png"
  }


  async desactivateTask(task) {
    const confirm = await this.alertCtrl.create({
      header: 'ANULAR CITA',
      message: '¿Estas seguro que quieres eliminar esta cita?',
      buttons: [
        {
          text: 'SI',
          handler: data => {
            const idPrin = localStorage.getItem('idTokenUser');
            console.log(localStorage.getItem('idTokenUser'));
            if (this.task.familiar === false) {
              this.appointmentProvider.destroyAppointment(task).subscribe(data => {
                this.router.navigate(['my-dates']);
                /* this.navCtrl.push(MyDatesPage); */
              });
            } else {
              this.appointmentProvider.destroyAppointmentContact(task).subscribe(data => {
                this.router.navigate(['my-dates']);
                /* this.navCtrl.push(MyDatesPage); */
              });
            }
          }
        },
        {
          text: 'NO',
          handler: () => {
            return true;
          }
        }
      ],
      /* enableBackdropDismiss: false */
    });
    confirm.present();
  }

  getpermissions() {
    this.appointmentid = this.task.appointmentId;
    if (this.task.familiar === true) {
      this.permissionSrv.getAuthoParent(this.appointmentid, this.task.patientId).subscribe(async data => {
        console.log('data', data);
        if (data.token === "") {
          const data = JSON.stringify(this.task);
          this.router.navigate(['waiting-video', data])
          console.log('enviar a pagina de espera');
        }
        else if (data.token === 'finalizado') {
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
          this.router.navigate(['home']);
        } else {
          const data = JSON.stringify(this.task);
          this.router.navigate(['page-video', data])
        }
      })
    } else {
      this.permisions();
    }
  }

  permisions() {
    this.permissionSrv.getPermissionsVideo(this.appointmentid).subscribe(async (data: any) => {
      console.log('data pedida desde my-date:', data);
      if (data.token === "") {
        const data = JSON.stringify(this.task);
        this.router.navigate(['waiting-video', data])
        console.log('enviar a pagina de espera');
      }
      else if (data.token === 'finalizado') {
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
        this.router.navigate(['home']);
      } else {
        const data = JSON.stringify(this.task);
        this.router.navigate(['page-video', data])
      }
    })
  }

  back() {
    this.router.navigate(['home']);
  }

}
