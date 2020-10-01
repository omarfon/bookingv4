import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { API_IMAGES, environment } from 'src/environments/environment';
import { ToastController, AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsVideoService } from 'src/app/services/permissions-video.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { OPENTELE } from 'src/environments/environment';

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
  permisionsData: any;

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public appointmentProvider: AppoinmentService,
    public modalCtrl: ModalController,
    public router: Router,
    public routes: ActivatedRoute,
    public permissionSrv: PermissionsVideoService,
    public iab: InAppBrowser) {



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

  async openModalData() {
    let alert = await this.alertCtrl.create({
      header: 'Esta cita no se puede eliminar',
      subHeader: 'para mayor información comunicate a nuestro call center al número (01) 7154600 y te ayudaremos al respecto',
      buttons: [
        {
          text: 'Entiendo'
        }
      ]
    });
    await alert.present();
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
        this.permisionsData = data;
        console.log('data', data);
        if (data.token === "") {
          const data = JSON.stringify(this.task);
          this.router.navigate(['waiting-video', data]);
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
          /* const data = JSON.stringify(this.task);
          this.router.navigate(['page-video', data]) */
          this.openVideo();
        }
      })
    } else {
      this.permisions();
    }
  }

  permisions() {
    this.permissionSrv.getPermissionsVideo(this.appointmentid).subscribe(async (data: any) => {
      console.log('data pedida desde my-date:', data);
      this.permisionsData = data;
      if (data.token === "") {
        const data = JSON.stringify(this.task);
        this.router.navigate(['waiting-video', data]);
        /* console.log('enviar a pagina de espera'); */
      }
      else if (data.token === 'finalizado') {
        const alert = await this.alertCtrl.create({
          header: 'Cita Terminada',
          subHeader: 'Esta cita ya ha finalizado, puedes ver el resumen en teleconsultas',
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
        this.openVideo();
      }
    })
  }

  openVideo() {
    this.permisionsData;
    const url = OPENTELE;
    const appId = encodeURIComponent(this.task.appointmentId);
    const professional = encodeURIComponent(this.task.professionalId);
    const professionalName = encodeURIComponent(this.task.professionalName);
    const professionalLastName1 = encodeURIComponent(this.task.professionalLastName1);
    const professionalLastName2 = encodeURIComponent(this.task.professionalLastName2);
    const basicServiceDescription = encodeURIComponent(this.task.basicServiceDescription);
    const patientId = encodeURIComponent(this.task.patientId);
    const channel = encodeURIComponent(this.permisionsData.channel);
    console.log('resultado de la data para permisos:', this.permisionsData);
    let options = "location=yes,hidden=yes,beforeload=yes";
    const browser = this.iab.create(`${url}/telecon/%7B"appointmentId":${appId},"basicServiceDescription":"${basicServiceDescription}","professionalId":${professional},"professionalName":"${professionalName}","professionalLastName1":"${professionalLastName1}","professionalLastName2":"${professionalLastName2}","patientId":${patientId},"channel":"${channel}"%7D`, '_system', options);

  }


  back() {
    this.router.navigate(['home']);
  }

}
