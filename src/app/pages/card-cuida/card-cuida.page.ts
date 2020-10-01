import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';
import { ModalController, LoadingController, AlertController, IonSlides } from '@ionic/angular';
import { API_IMAGES } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

@Component({
  selector: 'app-card-cuida',
  templateUrl: './card-cuida.page.html',
  styleUrls: ['./card-cuida.page.scss'],
})
export class CardCuidaPage implements OnInit {
  @ViewChild('MyDays') MyDays: ElementRef;

  loading: boolean;
  data: {};
  centers;
  specialtyes;
  _doctors: any = [];
  doctors: any = [];
  professionals;
  allprofessionals;
  id;
  public sede;
  public especialidad;

  specialty_id;

  search: string = '';
  formateado;

  profesionales;

  doctor: number = 0;
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
  mostrar: boolean = true;
  public escogido = 44;
  public boxID: any;
  public boxCaID: any;

  constructor(public modalCtrl: ModalController,
    public helloPvr: HelloService,
    public elementRef: ElementRef,
    public render: Renderer2,
    public alertContrl: AlertController,
    public loadingCtrl: LoadingController,
    public router: Router) { }

  ngOnInit() {
    this.hora = null;
    /* this.hora = this.navParams.get('hora');
    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available'); */

    if (this.hora) {
      let datos = {
        hora: this.hora,
        doctor: this.doctor,
        available: this.available
      }
      this.router.navigate(['financer', datos])
    } else {
      console.log("no trae data, seguir con el proceso normal");
    }
    this.id = 38;
    this.fromDate = moment().format("YYYY-MM-DD");
    this.toDate = moment().add(this.numDays, "day").format("YYYY-MM-DD");
    this.disponibles = true;

    /*     llamada en la carga de la pagina para invocar a los servicios por defecto carga los doctores de medicina general*/
    this.helloPvr.getServicios().subscribe((servicios: any) => {
      this.servicios = servicios.centers[0].services.filter(x => x.block == 'cuida');
      console.log('this.servicios:', this.servicios);
      if (this.servicios.length > 0) {
        this.id = this.servicios[0].id;
        this.getDoctorsList();
      }
      if (servicios.length == 0) {
        this.sesionExpired();
      }
      if (servicios.status == false) {
        console.log('mostrar alert con error');
      }
    });
  }

  errorHandler(event) {
    event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png"
  }

  async sesionExpired() {
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

  /*   AQUI OBTENEMOS LOS DOCTORES EN LA CARGA DE LA PAGINA, POR DEFECTO TENEMOS A LOS DOCTORES DE MEDICINA GENERAL */
  async getDoctorsList() {
    this.doctors = "";
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Doctores...',
      spinner: 'dots',
      duration: 4000
    })
    await loading.present();
    /* const basicServiceId = this.id */
    /* console.log('basicServiceId' ,basicServiceId); */
    this.helloPvr.getDoctorsPerId(this.id).subscribe(doctors => {
      this.disponibles = false;
      if (doctors.length === 0) {
        this.disponibles = true;
        return null;
      }
      console.log(doctors);

      this.doctors = doctors;
      for (let doctor of doctors) {
        this.helloPvr.getAvailablesPerDoctor(doctor.id, this.escogido, doctor.service.id, this.fromDate, this.toDate).subscribe((availables: any) => {
          if (availables && availables.length > 0) {
            doctor.availables = availables;
            doctor.isAvailable = true;
            doctor.expanded = false;
          }
        })
      }
      this.doctorsF = this.doctors;
      console.log('this.doctors:', this.doctorsF);
    });
    // loading.dismiss();
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
    if (this.search.length == 0) {
      /*     console.log('no hay busqueda');
          console.log(this.doctors); */
      this.doctorsF = this.doctors;
      return
    }

    this.doctorsF = this.doctors.filter(doctor => {
      const isOk = doctor.fullName.toLowerCase().indexOf((this.search).toLowerCase()) != -1;
      return isOk;
    });

  }
  stateShow(item: any, index, items) {
    console.log(item
      , index, items);
    this.boxID = item;
    this.boxCaID = index;
    this.selectedDay = items;
  }

  async expandedItem(doctor, available) {
    if (!this.hora) {
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
      this.helloPvr.getAvailablesPerDoctor(id, this.escogido, serviceId, fromDate, toDate).subscribe(hoy => {
        console.log('hoy', hoy);
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
        this.horasConsulta = this.dias.filter(x => x.params.provisionId[0] === 44);
        if (this.horasConsulta.length > 0) {
          this.mostrar = false;
        } else {
          this.mostrar = true;
        }
        this.horasTele = this.dias.filter(x => x.params.provisionId[0] === 838517);
        if (this.horasTele.length > 0) {
          this.mostrar = false;
        } else {
          this.mostrar = true;
        }
        console.log('horasConsulta:', this.horasTele, this.horasConsulta);
        loading.dismiss();
        console.log('las horas:', this.horas);
        this.dia = available.date;
        // console.log('dias', this.dias);
      })
    } else {
      console.log('doctor:', doctor, available);
      this.selectedDay = available;
      let id = doctor.id;
      let serviceId = doctor.service.id;
      let fromDate = this.selectedDay.date;
      let toDate = this.selectedDay.date;
      this.helloPvr.getAvailablesPerDoctor(id, this.escogido, serviceId, fromDate, toDate).subscribe(hoy => {

        console.log('hoy', hoy);
        this.dias = hoy[0].hours;
        console.log('this.dias:', this.dias);
        this.doctors.map((listDoctor) => {
          if (doctor == listDoctor) {
            listDoctor.expanded = true;
          } else {
            listDoctor.expanded = false;
          }
          return listDoctor
        });
        this.horas = this.dias;
        const horasConsulta = this.dias.filter(x => x.params.provisionId[0] === 838517);
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
    if (role === 'public') {
      const datos =
      {
        centerId: hora.params.centerId,
        servicio_id: hora.params.serviceId,
        prestacion: hora.params.provisionId,
        medico_id: doctor.id,
        proposedate: this.selectedDay.date,
        hora: hora,
        /*  encuentro: this.escogido, */
        doctor: {
          id: doctor.id,
          fullname: doctor.fullName,
          info: doctor.info,
          service: doctor.service,
          cmp: doctor.cmp
        }
      };
      const data = JSON.stringify(datos);
      this.router.navigate(['login', data])
      // datos.present();
    } else {
      const datos =
      {
        centerId: hora.params.centerId,
        servicio_id: hora.params.serviceId,
        prestacion: hora.params.provisionId,
        medico_id: doctor.id,
        proposedate: this.selectedDay.date,
        hora: hora,
        /* encuentro: this.escogido, */
        doctor: {
          id: doctor.id,
          fullname: doctor.fullName,
          info: doctor.info,
          service: doctor.service,
          cmp: doctor.cmp
        }
      };
      const data = JSON.stringify(datos);
      this.router.navigate(['financer', data])
    }
  }

  nextSlide() {
    console.log('slideNext');
    /* this.slides.slideNext(); */
  }

  slidePrev() {
    console.log('slidePrev');
    /* this.slides.slidePrev(); */
  }

  goToCura() {
    this.router.navigate(['card']);
    /* this.navCtrl.push(CardCuidaPage); */
  }

}
