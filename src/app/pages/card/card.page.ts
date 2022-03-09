import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';
import { ModalController, LoadingController, AlertController, IonSlides } from '@ionic/angular';
import { API_IMAGES } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { DoctordataService } from '../../services/doctordata.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  /* @ViewChild('slides') slides: Slides; */
  @ViewChild('MyDays') MyDays: ElementRef;

  loading: boolean;
  data: {};
  centers;
  specialtyes;
  _doctors: any = [];
  doctors: any = [];
  professionals;
  allprofessionals;
  public id;
  public sede;
  public especialidad;
  public color: any = 'warn';
  public mode: any = 'indeterminate';

  specialty_id;

  search: string = '';
  formateado;

  profesionales;

  doctor:number = 0;
  horas: any[] = [];
  available: any[];
  dia: any[];
  fromDate: string;
  toDate: string;
  numDays: number = 6;

  servicios: any[] = [];
  doctoresData: any[] = [];

  doctorData;
  itemExpanded: boolean = true;
  itemExpandHeight: number = 350;
  changueColor: Boolean = false;

  hora: any = [];
  dias;
  selectedDay;
  public listDoctorsHoras;
  public turnoManana;
  public turnoTarde;
  public conAvailables;
  public doctorList;
  public disponibles: boolean = true;
  public SERVERImage = API_IMAGES;
  public doctorsF;
  horasConsulta: any;
  horasTele: any;
  mostrar:boolean = true;
  boxID: any;
  boxCaID: any;
  public nameSpecialty;
  datesCalendar: any;
  public manyBoxes;
  public hours;
  public chargeHours = false;
  
  constructor(
    public modalCtrl: ModalController,
    public helloPvr: HelloService,
    public elementRef: ElementRef,
    public render: Renderer2,
    public alertContrl: AlertController,
    public loadingCtrl: LoadingController,
    public doctorSrv: DoctordataService,
    public router: Router) { 
     
    }

  ngOnInit() {}
  ionViewDidEnter (){
    this.fromDate = moment().format("YYYY-MM-DD");
    this.toDate = moment().add(this.numDays, "day").format("YYYY-MM-DD");
    this.disponibles = true;
    const especialidad = this.helloPvr.especialidad;
    if(especialidad){
      this.getSpecialtyes();
      this.id = this.helloPvr.especialidad.id;
      this.getDoctorWDates();
      this.nameSpecialty = this.helloPvr.especialidad.description;
      console.log(this.helloPvr.especialidad,this.id);
    }else{
      this.router.navigate(['/options']);
      console.log('se va hasta options');
    }
    this.updateSession();
  }

  updateSession(){
    const datosUser = JSON.parse(localStorage.getItem('authorization'));
    let data = {
      userId: datosUser.patientId,
      app:'mi aviva',
      date: new Date(),
      role: datosUser.role,
      session: datosUser.sessionId
    }
    this.doctorSrv.upSession(data).subscribe(resp => {
      console.log('devuelta guardada.',resp);
    })
  }

  

  async getDoctorWDates(){
    this.helloPvr.getDoctorsSpecialtyBD(this.id).subscribe((data:any) => {
      console.log('data recibida de nuevo endpoint:',data);
      this.doctorsF = data;
      this.doctors = data;
      console.log('todos los especialistas:',this.doctorsF);

    }); 
  }


getSpecialtyes(){
  this.helloPvr.getServicios().subscribe((servicios:any) => {
    this.servicios = servicios.centers[0].services;
    console.log('this.servicios:',this.servicios, servicios);
    if (this.servicios.length > 0) {
      
    }
    if (servicios.length == 0) {
     this.sesionExpired();
  }
  if(servicios.status == false){
    console.log('mostrar alert con error');
  }
})
}

  async sesionExpired(){
    const alert = await this.alertContrl.create({
      header: 'Sesión expirada',
      message: 'necesitas reiniciar sesión',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigate(['login']);
          /* this.navCtrl.push(LoginPage); */
        }
      }
    ]
  });
  await alert.present();
  }

  stateShow(item: any, index, items) {
    console.log(item, index, items);
    this.hours = [];
    this.chargeHours = true;
    this.boxID = item;
    this.boxCaID = index;
    this.selectedDay = items;
    const dataDate = items;
    console.log('llamado de horas para el dia', item, index, items);
    let data = {
      fromDateString: items.fecha + 'T00:00:00.000',
      toDateString: items.fecha + 'T00:00:00.000',
      centerId: items.cod_centro,
      basicServiceId: items.serv_bas_pk,
      professionalId: items.codigo_personal,
      provisions : [
        items.prest_item_pk
      ]
    } 
    this.helloPvr.getDoctorsSlotsPerDay(data).subscribe((resp:any) => {
      this.hours = resp[0].appointmentDateTimes;
        console.log('horas solicitadas:',resp, this.hours);
      this.chargeHours = false;
    })
  }

  errorHandler(event) {
    event.target.src = "assets/imgs/noimage.png"
  }

  onChangueSpecialty(specialty: any) {
    console.log('specialty en onChangueSpecialty:', specialty);
    this.doctorsF = [];
    this.id = specialty;
    this.getDoctorWDates();
  }

  getDoctorsPerDay() {
    this.doctorsF = [];
    this.toDate = moment(this.fromDate).format("YYYY-MM-DD");
    console.log(this.toDate);
    this.getDoctorWDates();
  }

  getHoursPerDay(doctor,dia){
    console.log(doctor, dia);
    let data = {
        "centerId": dia.hours.params.centerId,
        "basicServiceId": dia.hours.params.basicServiceId,
        "professionalId":doctor.id,
        "provisions": [
          dia.hours.params.provisionId[0]
        ],
        "fromDateString":   dia.date + 'T00:00:00.000',
        "toDateString":   dia.date + 'T00:00:00.000'
    
    }
    this.helloPvr.getHoursPerDay(data).subscribe(data =>{
      this.hours = data[0].appointmentDateTimes;
      console.log(this.hours)
    })
  }

  buscarDoctor() {
    if (this.search.length == 1) {
      this.doctorsF = [];
      return
    }
    console.log(this.search);
    if(this.search.length == 0){
      this.doctorsF = this.doctors;
      return 
    }

    this.doctorsF = this.doctors.filter(doctor => {
      const isOk = doctor.nombreCompleto.toLowerCase().indexOf((this.search).toLowerCase()) != -1;
      console.log(isOk)
      this.doctorsF = isOk;
      return isOk;
    });

  }

  async expandedItem(doctor, available) {
    if(!this.hora){
      const loading = await this.loadingCtrl.create({
        message: 'Cargando horas disponibles...',
        spinner: 'bubbles',
      });
      await loading.present();
      console.log('doctor:', doctor, available);
      this.selectedDay = available;
      console.log('selectedDay:', this.selectedDay);
      let id = doctor.id;
      let serviceId = doctor.service.id;
      let fromDate = this.selectedDay.date;
      let toDate = this.selectedDay.date;
      this.helloPvr.getAvailablesPerDoctor(id, serviceId , fromDate, toDate).subscribe(hoy => {
        console.log('hoy' , hoy);
        this.dias = hoy[0].hours;
        // console.log('this.dias:',this.dias);
        this.doctors.map((listDoctor) => {
          if (doctor == listDoctor) {
            listDoctor.expanded = true;
          } else {
            listDoctor.expanded = false;
          }
          return listDoctor
        });
        this.horas = this.dias;
        this.horasConsulta = this.dias.filter(x  => x.params.provisionId[0] === 44);
        if(this.horasConsulta.length > 0){
            this.mostrar = false;
        }else{
            this.mostrar = true;
        }
        this.horasTele = this.dias.filter(x  => x.params.provisionId[0] === 838517);
        if(this.horasTele.length > 0){
          this.mostrar = false;
      }else{
          this.mostrar = true;
      }
        console.log('horasConsulta:', this.horasTele, this.horasConsulta);
        loading.dismiss();
        console.log('las horas:', this.horas);
        this.dia = available.date;
      })
    }else{
      console.log('doctor:', doctor, available);
      this.selectedDay = available;
      let id = doctor.id;
      let serviceId = doctor.service.id;
      let fromDate = this.selectedDay.date;
      let toDate = this.selectedDay.date;
      this.helloPvr.getAvailablesPerDoctor(id, serviceId , fromDate, toDate).subscribe(hoy => {
  
        console.log('hoy' , hoy);
        this.dias = hoy[0].hours;
        console.log('this.dias:',this.dias);
        this.doctors.map((listDoctor) => {
          if (doctor == listDoctor) {
            listDoctor.expanded = true;
          } else {
            listDoctor.expanded = false;
          }
          return listDoctor
        });
        this.horas = this.dias;
        const horasConsulta = this.dias.filter(x  => x.params.provisionId[0] === 838517);
        console.log('horasConsulta:', horasConsulta);
        console.log('las horas:', this.horas);
        this.dia = available.date;
        // console.log('dias', this.dias);
      })
    }
  }

  goToFinancer(doctor, hora) {
    console.log('doctor:', doctor);
    console.log('hora:', hora);
    console.log(this.selectedDay);
    let role = localStorage.getItem('role');
      this.helloPvr.dataEscogida = hora;
      this.router.navigate(['financer'])
    
  }

  nextSlide() {
    console.log('slideNext');
    /* this.slides.slideNext(); */
  }
  
  slidePrev(){
    console.log('slidePrev');
    /* this.slides.slidePrev(); */
  }

  goToCuida(){
    this.router.navigate(['card-cuida']);
    /* this.navCtrl.push(CardCuidaPage); */
  }

}
