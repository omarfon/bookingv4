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
  public otherDoctors;
  public _doctorsSpecialty;
  public datesCalendar;
  public doctorsSpecialty;
  public slider: boolean = true;
  public enbloque: boolean = false;
  boxID: any;
  boxCaID: any;
  public noSpecialty: boolean = false;
  public selectedDay;
  slideOpts = {
    slidesPerView: 1.9,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
   constructor(public doctorDataSrv: DoctordataService,
              public loadingCtrl: LoadingController,
              public router: Router,
              public helloSrv: HelloService) {
               
               }

  async ngOnInit() {
  }

  ionViewWillEnter(){
    const doctorData = this.doctorDataSrv.doctor
       if( doctorData){
         this.dataDoctor = this.doctorDataSrv.doctor;
         this.idoctor = this.dataDoctor.id;
           this.getDataDoctor();
         this.bloque = this.dataDoctor.bloque;
         console.log(this.dataDoctor, this.bloque);
         this.specialty = this.dataDoctor.services[0].id;
         this.idDoctor = this.dataDoctor.id;
       }else{
         this.loadingCtrl.dismiss();
         this.goToHome();
       }
       this.getDatesDoctor();
       this.getAllDoctorsSpecialty();
  }

  /* 
  OBTENER LOS DIAS DISPONIBLES DE UN ESPECIALISTA */
  async getDatesDoctor(){
    if(this.dataDoctor){
      const loading = await this.loadingCtrl.create({
        message:'Cargando info del especialista',
      });
      await loading.present();
    }
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
      }, err => {
        console.log(err);
        this.loadingCtrl.dismiss();
        this.noSpecialty = true;
      })
    }
  }

/* 
OBTENER LOS DATOS GUARDADOS EN EL MONGO, DATOS DE FORMACIÓN Y ADICIONALES DEL ESPECIALISTA */
  getDataDoctor(){
    this.doctorDataSrv.getDoctorInfo(this.idoctor).subscribe((res:any) =>{
      if(res){
        this.datosDoctor = res;
        console.log(this.datosDoctor);
      }else{
        this.datosDoctor = null;
      }
    }, err => {
      /* this.dataDoctor = null; */
    })
  }

  /* 
  FUNCIÓN PARA CARGAR NUEVA DATA DE OTROS ESPECIALISTAS */
  goToDetailDoctor(doctor){
    this.dataDoctor = false;
    this.provisionsData = false;
    this.doctorDataSrv.doctor = doctor;
    console.log('go to doctor:',doctor);
    this.idDoctor = doctor.id;
    this.dataDoctor = doctor.info;
    this.idoctor = this.dataDoctor.id;
    this.getDataDoctor();
/*     this.getDatesDoctor(); */
    this.provisionsData = doctor.availables;
    this.specialty = doctor.service.id;
  }

  /* 
  DESPUES DE HABER SELECCIONADO UN DÍA Y HORA DE UN ESPECIALISTA ESTE LLAMADO LO INTEGRA AL FLUJO DE RESERVA */
  goToFinancer(h){
    this.helloSrv.dataEscogida = h;
    this.router.navigate(['financer']);
    console.log('datos escogido',h);
  }

  activeCode(){
    this.enbloque = false;
    this.slider = true;
  }

  activeBloque(){
    this.slider = false;
    this.enbloque = true;
  }

  /* 
  PARAMETROS PARA OBTENER IDENTIFICAR EL DIA SELECCIONADO  */
  stateShow(index, items) {
/*     this.boxID = item;
 */    this.boxCaID = index;
    this.selectedDay = items;
  }

  /* 
  OBTENER A TODOS LOS ESPECIALISTAS PARA UNA FUTURA BUSQUEDA */
  getAllDoctorsSpecialty(){
    this.helloSrv.getDoctorsSpecialty(this.specialty, this.dateFirst, this.dateSecond).subscribe((data:any) =>{
      console.log('todos los especialistas:',data);
      this.otherDoctors = data.centers[0].services[0].professionals;
     const doctors = this.otherDoctors.filter( x => x.availables.length > 0);
      this._doctorsSpecialty = doctors.filter( x => x.id !== this.idoctor);
      this._doctorsSpecialty.forEach(element => {
        const fech = element.availables;
        this.datesCalendar = fech;

        fech.forEach(dat => {
          dat.hours.hour = dat.hours.map((element: any) => {
            return element.hour.slice(0, 5);
          });
          dat.newFormatDay = moment(dat.date).locale('es').format('DD');
          dat.date = moment(dat.date).locale('es').format('dddd').slice(0, 3);
        });
      })
      this.doctorsSpecialty = this._doctorsSpecialty;
      console.log('doctores disponibles:',this.doctorsSpecialty);
  }, err =>{
    this.doctorsSpecialty = [];
  })
}
// VOLVER A HOME
goToHome(){
  this.doctorDataSrv.doctor = [];
  this.router.navigate(['home']);
}


}
