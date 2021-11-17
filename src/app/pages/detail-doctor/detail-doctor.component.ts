import { Component, OnInit } from '@angular/core';
import { DoctordataService } from './../../services/doctordata.service';
import { LoadingController } from '@ionic/angular';
import { API_ENDPOINTIMG } from './../../../environments/environment';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HelloService } from 'src/app/services/hello.service';


@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.scss'],
})
export class DetailDoctorComponent implements OnInit {
  public dataDoctor;
  public idoctor;
  public bloque;
  public datosDoctor;
  public close;
  public url = API_ENDPOINTIMG;
  public provisionsData;
  public specialty;
  public idDoctor;
  public dateFirst = moment().format('YYYY-MM-DD');
  public dateSecond = moment().add(6, 'days').format('YYYY-MM-DD');
   constructor(public doctorDataSrv: DoctordataService,
              public loadingCtrl: LoadingController,
              public router: Router,
              public helloSrv: HelloService) {

                if( this.doctorDataSrv.doctor){
                  this.dataDoctor = this.doctorDataSrv.doctor;
                  console.log(this.dataDoctor);
                  this.idoctor = this.dataDoctor.id;
                  this.bloque = this.dataDoctor.bloque;
                  this.specialty = this.dataDoctor.services[0].id;
                  this.idDoctor = this.dataDoctor.id;
                  this.getDataDoctor();
                }else{
                  this.loadingCtrl.dismiss();
                  this.router.navigate(['home']);
                }
               }

  async ngOnInit() {
      this.getDatesDoctor();
  }

  async getDatesDoctor(){
    const loading = await this.loadingCtrl.create({
      message:'Cargando info del especialista',
    });
    await loading.present();

    if(this.idoctor !== ''){
      this.helloSrv.getDoctorsDispo(this.specialty, this.idDoctor, this.dateFirst, this.dateSecond).subscribe((data: any) => {
        this.provisionsData = data.centers[0].services[0].professionals[0].availables;
        console.log('data que me llega a doctores details:',data);
        console.log('data que llega:', this.provisionsData);

        // RESET DATA
        const docts = data.centers[0].services[0].professionals
      
        docts.forEach(element => {
          const fech = element.availables;

            fech.forEach(dat => {
              dat.hours.hour = dat.hours.map((element: any) => {
                return element.hour.slice(0,5);
              });
              dat.newFormatDay = moment(dat.date).locale('es').format('DD');
              dat.date = moment(dat.date).locale('es').format('dddd').slice(0,3);
            });
            /* this.getDataDoctor(); */
        });
         this.loadingCtrl.dismiss();
        /*  this.dataDoctors = docts[0];
        console.log(this.dataDoctors); */
      })
    }
  }


  getDataDoctor(){
    this.doctorDataSrv.getDatesDoctor(this.idoctor.toString()).subscribe((res:any) =>{
      this.datosDoctor = res.data;
      console.log(this.datosDoctor);
    })
  }

  goToFinancer(h){
    this.helloSrv.dataEscogida = h;
    this.router.navigate(['financer']);
    console.log('datos escogido',h);
  }

}
