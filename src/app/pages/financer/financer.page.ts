import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { FinancerService } from 'src/app/services/financer.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { DependensService } from 'src/app/services/dependens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateparentPage } from '../createparent/createparent.page';


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

  private doctor; //doctor seleccionado//
  private available; //fecha seleccionada//
  private hora; // fecha seleccionada


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

  constructor(
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public financierProvider: FinancerService,
    public modalCtrl: ModalController,
    public appointmentProvider: AppoinmentService,
    public actionSheet: ActionSheetController,
    public loadingCtrl: LoadingController,
    public dependentsPvr: DependensService,
    public router: Router,
    public routes: ActivatedRoute) {
      const data = this.routes.snapshot.paramMap.get('data');
      this.dataArmada = JSON.parse(data);
      console.log(data);
     }

  ngOnInit() {
    
      console.log('this.dataArmada:',this.dataArmada);
    this.hora = this.dataArmada.hora;
    this.doctor = this.dataArmada.doctor;
    this.subida = this.dataArmada.hora.listjson;
    this.encuentro = this.dataArmada.encuentro;
    this.available = this.dataArmada.proposedate;
    /* this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available'); */
   /*  console.log('available y doctor:', this.available, this.doctor); */
    /* this.hora = this.navParams.get('hora'); */
/*     this._hora = JSON.stringify(this.hora.listjson); */
    /* console.log('this.hora:', this.hora); */

    this.dependentsPvr.getDependens().subscribe(data =>{
      this.parents = data
      /* console.log('this.parents:', this.parents); */
    });

    this.financierProvider.getFinanciers().subscribe(data =>
      { this.items = data;
        /* console.log('los financiadores:', data); */
        // this.items.shift();
      });


        /* this.isAndroid = platform.is('android'); */

        this.subida = this.hora.listjson;
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

evaluateEnsurance() {
  this.firtClick = !this.firtClick;
  this.isInsurance = false;
  this.isInsuranceName = true;
  this.payment = false;
  this.isPlace = false;
  this.isCard = false;
}


planesPaciente(){
  let centerId = this.hora.params.centerId;
  let servicio_id = this.hora.params.serviceId;
  let prestacion_id = this.hora.params.provisionId;
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

passFinancerParent(depe){
  this.addFamily = false;
  this.personOk = true;
  this.depe = depe;
  this.vcolor = false;
  this.ccolor = true;
  this.desabilitado = false;

  console.log('depe', depe);

  let paciente_id = depe.patientId;
  let servicio_id = this.hora.params.serviceId;
  let prestacion_id = this.hora.params.provisionId;
  let medico_id = this.doctor.id;


this.financierProvider.getplanesContacto(paciente_id, servicio_id, prestacion_id, medico_id, this.available).subscribe(data =>{
      this.planes = data;
      console.log(this.planes);
})
}

cleanDepe(){
  this.secureOk = false;
  this.depe = {};
  this.openParents()
  // console.log(this.depe);
  // this.personOk = false;
  // this.vcolor = false;
  // this.ccolor = false;
  this.nomark = false;
}

// mostrar el modal de la creación de familiares
async showDetailCreateParents(){
    const data =  {
      doctor : this.doctor,
      available : this.available,
      hora : this.hora,
      depe : this.depe,
      price : this.price,
      prestacion : this.prestacion
      };
    const modal = await this.modalCtrl.create({
      component: CreateparentPage,
      componentProps: data
    })
    await modal.present();
}

acceptFinancer(plan){
  this.plan = plan;
  console.log('el plan:', plan);
    this.nomark = true;
    this.financer = true; 
    this.paquete = false;
    this.desabilitado = true;
    this.plan = plan;
    this.price =  plan.precio[0].total ;
    this.nomark = true;
}

// función para ir a pagos
async goToPay(){
  if(this.price > 0 ){
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
  const datos = JSON.stringify(data)
  this.router.navigate(['pay',datos])
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
          /* this.navCtrl.setRoot(HomePage); */
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
      /* this.navCtrl.setRoot(HomePage); */
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
  /* this.viewCtrl.dismiss(data); */
  console.log('la data pasado por el modal:',data);
}

}
