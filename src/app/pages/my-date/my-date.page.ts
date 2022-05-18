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
  public dataCita;
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
    this.dataCita = JSON.stringify(this.task)
  }

  ngOnInit() {
  }

  /* 
  ESTA FUNCIÓN SIRVE PARA LA ELIMINACIÓN DE LA CITA, ENVIANDOLE SOLO EL PARAMETRO DE APPOINTMENTID */
  async desactivateTask(task) {
    const confirm = await this.alertCtrl.create({
      header: 'ANULAR CITA',
      message: '¿Estas seguro que quieres eliminar esta cita?',
      buttons: [
        {
          text: 'SI',
          handler: data => {
            const dataId = JSON.parse(localStorage.getItem('authorization'))
            const idPrin = dataId.patientId;
            console.log(localStorage.getItem('idTokenUser'));
            if (this.task.patientId == idPrin) {
              this.appointmentProvider.destroyAppointment(task).subscribe(data => {
                this.router.navigate(['my-dates']);
              });
            } else {
              this.appointmentProvider.destroyAppointmentContact(task).subscribe(data => {
                this.router.navigate(['my-dates']);
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
    });
    confirm.present();
  }

  /* 
  ESTA FUNCIÍON ESTABA REALIZADA PARA LA ESPERA EN UNA TELECONSULTA */
  getpermissions() {
    const appointmentid = this.task.appointmentId;
    this.permissionSrv.getPermissionsVideo(appointmentid).subscribe((data: any) => {
      console.log('data pedida desde my-date:', data);
      if (data.token != "") {
        const data = JSON.stringify(this.task);
        this.router.navigate(['page-video', data])
      } else {
        const data = JSON.stringify(this.task);
        this.router.navigate(['waiting-video', data])
        console.log('enviar a pagina de espera');
      }
    })
  }

  /* 
  FUNCIÓN PARA REGRESAR A LA PAGINA DE TODAS LAS CITAS */
  back() {
    this.router.navigate(['my-dates']);
  }

}
