import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';
import { ModalController, LoadingController, AlertController, IonSlides } from '@ionic/angular';
import { API_IMAGES } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';


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
  
  constructor(
    public modalCtrl: ModalController,
    public helloPvr: HelloService,
    public elementRef: ElementRef,
    public render: Renderer2,
    public alertContrl: AlertController,
    public loadingCtrl: LoadingController,
    public router: Router) { 
     
    }

  ngOnInit() {}
  ionViewDidEnter (){
    this.getSpecialtyes();
    this.fromDate = moment().format("YYYY-MM-DD");
    this.toDate = moment().add(this.numDays, "day").format("YYYY-MM-DD");
    this.disponibles = true;
    if(!this.helloPvr.especialidad){
      this.router.navigate(['/options']);
      console.log('se va hasta options');
    }else{
      this.id = this.helloPvr.especialidad.id;
      this.getDoctorsList();
      this.nameSpecialty = this.helloPvr.especialidad.description;
      console.log(this.helloPvr.especialidad,this.id);
    }
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
    this.boxID = item;
    this.boxCaID = index;
    this.selectedDay = items;
  }

  errorHandler(event) {
    event.target.src = "assets/imgs/noimage.png"
  }

  

  async getDoctorsList(){
    this.doctorsF = [];
    const loading = await this.loadingCtrl.create({
      message:"cargando especialistas"
    });
    await loading.present();
    this.helloPvr.getDoctorsSpecialty(this.id,this.fromDate, this.toDate).subscribe((doctors:any) => {
      const docts = doctors.centers[0].services[0].professionals.filter((element) => {
        return element.availables.length > 0;
      })
      this.manyBoxes = docts.length;
      docts.forEach(element => {
        const fech = element.availables;
        this.datesCalendar = fech;
      });
      this.doctorsF = docts;
      loading.dismiss();
    })
    console.log(this.doctorsF);
  }

  onChangueSpecialty(specialty: any) {
    console.log('specialty en onChangueSpecialty:', specialty);
    this.id = specialty;
    this.getDoctorsList();
  }

  getDoctorsPerDay() {
    this.toDate = moment(this.fromDate).add(this.numDays, "day").format("YYYY-MM-DD");
    this.getDoctorsList();
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
      const isOk = doctor.fullName.toLowerCase().indexOf((this.search).toLowerCase()) != -1;
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
