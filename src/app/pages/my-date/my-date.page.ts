import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { API_IMAGES } from 'src/environments/environment';
import { ToastController, AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-date',
  templateUrl: './my-date.page.html',
  styleUrls: ['./my-date.page.scss'],
})
export class MyDatePage implements OnInit {
  private task;
  private tasks;
  private SERVERImage = API_IMAGES;

  constructor(
             public toastCtrl: ToastController,
            public alertCtrl: AlertController,
            public actionSheetCtrl: ActionSheetController,
            public appointmentProvider: AppoinmentService,
            public modalCtrl: ModalController,
            public router: Router,
            public routes: ActivatedRoute) { 

              let data = this.routes.snapshot.paramMap.get('datos');
              this.task = JSON.parse( data);
    /* console.log(this.dataArmada); */
              /* this.date = this.dataArmada.appointmentId; */
            }

  ngOnInit() {
  }

  async desactivateTask(task){
    const confirm = await this.alertCtrl.create({
      header: 'ANULAR CITA',
      message: '¿Estas seguro que quieres eliminar esta cita?',
      buttons: [
        {
          text: 'SI',
          handler: data => {
            const idPrin = localStorage.getItem('idTokenUser');
            console.log(localStorage.getItem('idTokenUser'));
            if(this.task.patient.id == idPrin){
              this.appointmentProvider.destroyAppointment(task).subscribe( data => {
                this.router.navigate(['my-dates']);
                /* this.navCtrl.push(MyDatesPage); */
              });
            }else{
              this.appointmentProvider.destroyAppointmentContact(task).subscribe( data => {
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

  back(){
    this.router.navigate(['my-dates']);
  }

}
