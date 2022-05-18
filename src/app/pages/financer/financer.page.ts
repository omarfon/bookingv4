import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { FinancerService } from 'src/app/services/financer.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { DependensService } from 'src/app/services/dependens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateparentPage } from '../createparent/createparent.page';
import { HelloService } from 'src/app/services/hello.service';
import { CreateParentPrimePage } from './../create-parent-prime/create-parent-prime.page';


@Component({
  selector: 'app-financer',
  templateUrl: './financer.page.html',
  styleUrls: ['./financer.page.scss'],
})
export class FinancerPage implements OnInit {
  public items;
  public price;
  public _price;
  isAndroid: boolean = false;

  public doctor; //doctor seleccionado//
  public available; //fecha seleccionada//
  public hora; // fecha seleccionada


  myEnsuranceName: string;
  firtClick: boolean = false;
  isInsurance: boolean = false;
  isInsuranceName: boolean = false;
  isCard: boolean = false;
  name: any;
  card: number;
  isPlace: boolean = false;
  payment: boolean = false;
  secure: boolean;
  nameSecure: String;
  financier_id: string;
  paymentName: String;
  appointment: any;
  user_id;
  paymentType: string;
  open: boolean = false;

  myForm: FormGroup;
  pase;
  private hour;
  private subida;
  pay;
  currentAppointment = null;
  personOk: boolean = false;
  addFamily: boolean = false;
  secureOk: boolean = false;
  depe;
  public parents;
  vcolor = false;
  ccolor = false;
  yes = false;
  no = false;
  public prestacion;
  public planes;
  public desabilitado: boolean = false;
  public nomark:boolean = false;
  public paquete = true;
  public _hora;
  public provision;
  public plan;
  dataArmada: any;
  encuentro: any;
  financer: boolean;
  public dataEscogida;
  public listJson;
  constructor(
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public financierProvider: FinancerService,
    public modalCtrl: ModalController,
    public helloSrv: HelloService,
    public appointmentProvider: AppoinmentService,
    public actionSheet: ActionSheetController,
    public loadingCtrl: LoadingController,
    public dependentsPvr: DependensService,
    public router: Router,
    public routes: ActivatedRoute) {
      /* const data = this.routes.snapshot.paramMap.get('data');
      this.dataArmada = JSON.parse(data);
      console.log(data); */
     }

  ngOnInit() {
    this.dataEscogida = this.helloSrv.dataEscogida;
    console.log('dataEscogida:',this.dataEscogida);
    /* console.log('this.dataArmada:',this.dataArmada); */
    const datosListJson = JSON.parse(this.dataEscogida.listjson);
    console.log(datosListJson);
    this.hora = this.dataEscogida.hours;
    this.doctor = datosListJson.professional;
    this.subida = this.dataEscogida.listjson;
    this.available = datosListJson.appointmentDateTime; 

    this.getDependens();

    this.financierProvider.getFinanciers().subscribe(data =>
      { this.items = data;
      });
        this.subida = this.hora;
  let role = localStorage.getItem('role');
  if (role == 'guest') {
    let datos = 
      {
        hora: this.hora,
        doctor: this.doctor,
        available: this.available
      };
      this.router.navigate(['login', datos]);
    // datos.present();
  } else {
    console.log("si hay constraseña. que pase");
  }
}

/* 
EN LA CARGA INICIAL SE OBTIENEN LOS DEPENDIENTES PARA CADA USUARIO LOGUEADO */
ionViewDidEnter(){
  this.getDependens();
}

/* 
FUNCIÓN PARA OBTENER LOS DEPENDIENTES */
getDependens(){
  this.dependentsPvr.getDependens().subscribe(data =>{
    this.parents = data
  });
}

/* 
EVALUACIÓN DE FINANCIADOR */
evaluateEnsurance() {
  this.firtClick = !this.firtClick;
  this.isInsurance = false;
  this.isInsuranceName = true;
  this.payment = false;
  this.isPlace = false;
  this.isCard = false;
}

/* 
FUNCIÓN PARA OBTENER LOS FINANCIADORES PARA UN USUARIO ESPECIFICO, ESTO CONTEMPLA VIVA+, PLANES MATERNOS, FINANCIDORES COMO EPS
Y TODOS LOS QUE SE HAYAN DESIGNADO PREVIAMENTE A UN USUARIO */
planesPaciente(){
  let centerId = this.dataEscogida.params.centerId;
  let servicio_id = this.dataEscogida.params.serviceId;
  let prestacion_id = this.dataEscogida.params.provisionId;
  let medico_id = this.doctor.id;
  this.financierProvider.getPlanesPaciente(centerId, servicio_id, prestacion_id, medico_id, this.available).subscribe(data =>{
    this.planes = data;
    console.log('this.planes:',this.planes);
  });
}


// si la cita es para el usuario pasará mostrando la ventana de financiador
passFinancer(depe){
this.personOk = !this.personOk;
this.personOk = true;
this.addFamily = false;
this.depe = depe;
this.vcolor = true;
this.ccolor = false;
this.price = null;
this.desabilitado = false;

this.planesPaciente();

}

// mostrar los familiares adjuntos o la opción de crear uno nuevo
openParents(){
  this.addFamily = true;
  this.personOk = false;
  this.ccolor = true;
  this.vcolor = false;
  this.nomark = false;
  this.desabilitado = true;

  this.planes = [];
}

 /* 
 PASE A FINANCIADOR SI LO QUE SE HA SELEECCIONADO ES A UN DEPENDIENTE */
passFinancerParent(depe){
  this.addFamily = false;
  this.personOk = true;
  this.depe = depe;
  this.vcolor = false;
  this.ccolor = true;
  this.desabilitado = false;
  let paciente_id = depe.patientId;
  let servicio_id = this.dataEscogida.params.serviceId;
  let prestacion_id = this.dataEscogida.params.provisionId;
  let medico_id = this.doctor.id;


this.financierProvider.getplanesContacto(paciente_id, servicio_id, prestacion_id, medico_id, this.available).subscribe(data =>{
      this.planes = data;
      console.log(this.planes);
})
}

/* 
LIMPIA A LOS DEPENDIENTES SELECCIONADOS SI QUEREMOS CAMBIAR AL DEPENDIENTE */
cleanDepe(){
  this.secureOk = false;
  this.depe = {};
  this.openParents()

  this.nomark = false;
}

// mostrar el modal de la creación de familiares
async showDetailCreateParents(){
    const modal = await this.modalCtrl.create({
      component: CreateParentPrimePage,
      cssClass: 'my-custom-class'
    })
    await modal.present();
}

/* 
AL HACER CLICK SE ACEPTA EL FINANCIADOR PARA UN PLAN ESPECIFICO */
acceptFinancer(plan){
  this.plan = plan;
  this.nomark = true;
  this.financer = true; 
  this.paquete = false;
  this.desabilitado = false;
  this.plan = plan;
  if(this.plan){
    this.price =  plan.precio[0].total ;
  }else{
    this.price = 0;
  }
  console.log('el plan:', plan);
}

// FUNCIÓN PARA IR A PAGOS
async goToPay(){
  console.log(this.price)
  if(this.price > 0){
    console.log('precio y plan',this.price, this.plan);
    let data = {
      doctor:this.doctor,
      available: this.available,
      hora: this.hora,
      depe: this.depe,
      price: this.price,
      prestacion: this.prestacion,
      plan :this.plan
  };
  this.helloSrv.price = this.price;
  this.helloSrv.doctor = this.doctor;
  this.helloSrv.plan = this.plan;
  this.helloSrv.depe = this.depe;
  const datos = JSON.stringify(data)
  this.router.navigate(['pay'])
  console.log('el precio', this.price, this.prestacion);
  }else{
      if (this.currentAppointment == true) {
        const loading = await this.loadingCtrl.create({
          message: "creando cita"
        });
        await loading.present();
        let provisionId = this.hora.params.provisionId;
        this.appointmentProvider.createAppointment(this.subida, provisionId).subscribe(data => {
          // console.log("se ha creado la cita");
          this.createCita();
          loading.dismiss();
          this.router.navigate(['home']);
        });
      } else {
        const alert = await this.alertCtrl.create({
          header: "Creación de cita",
          message: "la cita que reservaste ha sido creada satisfactoriamente.",
          buttons: [
            {
              text: "Ok",
              role: "Cancel"
            }
          ]
        });
        await alert.present();
      }
      this.router.navigate(['home']);
  }
}
 async createCita(){
  const alert = await this.alertCtrl.create({
    header: "Creación de cita",
    message: "la cita que reservaste ha sido creada satisfactoriamente.",
    buttons: [
      {
        text: "Ok",
        role: "Cancel"
      }
    ]
  });
  await alert.present();
}

doSubmitData(){
  let data = this.parents
  console.log('la data pasado por el modal:',data);
}
acceptFinancerPaquete(plan){

}

next(){

}

openModalInfo(){
  
}

}
