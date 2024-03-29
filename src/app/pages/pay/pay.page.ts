import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { AlertController, LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudparentService } from 'src/app/services/crudparent.service';
import { CulqiService } from 'src/app/services/culqi.service';
import { API_IMAGES } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
declare var Culqi: any;


@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  myForm: FormGroup;
  currentAppointment = null;
  public subida;
  public hour;
  public price;
  public pago;
  public depe;
  public dependCreate;
  public title;
  public amount;
  public description;
  public  payCulqiCharges: boolean = true;
  public retrying:boolean = false;
  public alertError : any;
  public dataArmada;
  

  nots = [
    { "id": "1", "name": "En local" },
    { "id": "2", "name": "Con tarjeta" },
  ];


  private doctor; //doctor seleccionado//
  private available; //fecha seleccionada//
  private hora; // fecha seleccionada
  /* private culqiData; */
  private prestacion;
  private SERVERImage = API_IMAGES;
  private plan;
  public desactivadoBoton = true;
  public desactivadoBotonLocal = true;
  public culqiReturn;

  constructor(
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public appointmentProvider: AppoinmentService,
    public actionSheet: ActionSheetController,
    public loadingCtrl: LoadingController,
    public crudPvr: CrudparentService,
    public culqiPvr: CulqiService,
    public router: Router,
    public routes: ActivatedRoute) {
      const data = this.routes.snapshot.paramMap.get('datos');
      this.dataArmada = JSON.parse(data);
      console.log(this.dataArmada);
     }

  ngOnInit() {

    window['culqi']= this.culqi.bind(this);
     
    this.desactivadoBoton = true;
    this.desactivadoBotonLocal = true;
   /*  this.culqiData = JSON.parse(localStorage.getItem('culqiData')); */
  /* console.log('culqi guardada en local', localStorage.getItem('culqiData')); */

  this.pago = 'enLocal';

  this.doctor = this.dataArmada.doctor;
  this.available = this.dataArmada.available;
  this.hora = this.dataArmada.hora;
  console.log('this.hora:',this.hora);
  /* this.depe = this.navParams.get('depe'); */
  this.price = this.dataArmada.price;
  console.log('this.price:',this.price);
  /* this.prestacion = this.navParams.get('prestacion'); */
  console.log('this.prestacion:', this.prestacion );

  this.subida = this.hora.listjson;
  this.plan = this.dataArmada.plan;
  console.log('la hora', this.plan, this.plan);



  /* this.myForm = this.fb.group({
    name: ['', [Validators.required]],
    card: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    month: ['', [Validators.required]],
    year: ['', [Validators.required]]
  }, { validator: this.dateValid('month', 'year') }); */

  /* window['Culqi'].publicKey = 'pk_live_CyArY9ygzb0d7oZb'; */
  window['Culqi'].publicKey = 'pk_test_e85SD7RVrWlW0u7z';
  }

  async culqi(){
    console.log('culqi del componente', this);
    if(window['Culqi'].token){
      const getSettings = window['Culqi'].getSettings;
      const metadata = {
        patientId:this.currentAppointment.patient.id,
        appointmentId:this.currentAppointment.appointmentId,
        planId:this.plan.plan_pk,
        precioSinIGV:this.plan.precio[0].prest_precio_val,
        precioConIGV:this.plan.precio[0].total
      }
      const data = {
        amount : getSettings.amount,
        currency_code : getSettings.currency,
        email : window['Culqi'].token.email,
        source_id : window['Culqi'].token.id,
        metadata
      }
      console.log('data:', data);
      const loading = await this.loadingCtrl.create({
          message:'pagando cita'
      });
      await loading.present();
      this.payCulqiCharges = true;
      const self = this;
        this.culqiPvr.charges(data).subscribe( (vuelta:any) =>{
          console.log('data', vuelta);
          loading.dismiss();
          this.payCulqiCharges = true;
          if(vuelta.message == "ok"){
            this.router.navigate(['pagesformpre']);
            /* this.navCtrl.setRoot(PagesFormprePage); */
            this.formPre();
          }else{
            console.log('data', vuelta);
            this.alertError = this.alertCtrl.create({
                header:'error en tarjeta',
                message: 'problema en el cargo en su tarjeta',
                buttons : [
                  {
                    text:'cerrar',
                    handler:()=>{
                    this.payCulqiCharges = true;
                    this.desactivadoBoton = true;
                    }
                  },
                  {
                    text:'ver mis citas',
                    handler: async ()=>{
                      this.router.navigate(['mydates']);
                      /* this.navCtrl.push(MyDatesPage); */
                      const alert = await this.alertCtrl.create({
                        header:"Pago en Clínica",
                        message:'Tu pago no pudo ser realizado pero no te preocupes paga en la clínica tu cita fue reservada ...',
                        buttons:[
                          {
                            text:'ok'
                          }
                        ]
                      });
                      await alert.present();
                    }
                  }
                ],
            });
            this.alertError.present();
          }
        });
    }else{
      console.log('token error', window['Culqi'].error);

    }
  }

  async formPre(){
    const alert = await this.alertCtrl.create({
      header: "Creación de cita",
      message: "la cita que reservaste ha sido creada satisfactoriamente.",
      buttons: [
        {
          text: "OK",
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  dateValid(month: string, year: string) {
    return (group: FormGroup) => {
      let date = new Date();
      let monthInput = group.controls[month];
      let yearInput = group.controls[year];

      if (yearInput.value == date.getFullYear())
        if (monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2))
          return monthInput.setErrors({ notEquivalent: true })
    }
  }

  async openCulqi() {
    const loadingPago = await this.loadingCtrl.create({
      message: "Haciendo el cobro...",
    });
    await loadingPago.present();
    let appointment = this.currentAppointment;
    
    if(this.currentAppointment){
      console.log('this.plan', this.plan);
      const settings = {
        title : this.plan.plan_desc,
        description:this.plan.precio[0].prest_item_desc,
        currency: "PEN",
        amount: this.price * 100
      };

      window['Culqi'].options({
        style:{
          logo: 'https://api.aviva.pe/logo_aviva.png'
        }
      }) 
    window['Culqi'].settings(settings);

    console.log("open CUlqi", settings);
    const metadata = {
      patientId:this.currentAppointment.patient.id,
      appointmentId:this.currentAppointment.appointmentId,
      planId:this.plan.plan_pk,
      precioSinIGV:this.plan.precio[0].prest_precio_val,
      precioConIGV:this.plan.precio[0].total
    }
    console.log('metadata:', metadata);
    window['Culqi'].open();
    const i = setInterval(()=> {
      const culqiObj = window['Culqi'];
      console.log(culqiObj);
      if (culqiObj['closeEvent'] != null) {
        loadingPago.dismiss();
        console.log('Formulario culqi cerrado', culqiObj['closeEvent']);
        clearInterval(i);
      }
      if (culqiObj['error'] != undefined) {
        console.log('Formulario culqi error', culqiObj['error']);
        clearInterval(i);
        this.payClinic();
        /* this.payCulqiCharges = true; */
      }
    }, 1000);
    loadingPago.dismiss();
    }
  }

async payClinic(){
  let alert = await this.alertCtrl.create({
    header:'error al hacer cargo',
    message:'hubo un error alhacer cargo con la tarjeta',
    buttons:[
      {
        text:'reintentar',
        handler: ()=>{
          this.desactivadoBoton = true;
        }
      },
        {
        text:'Pagar en Clínica',
        handler: async ()=>{
          let alert = await this.alertCtrl.create({
            header:"Pago en Clínica",
            message:'Tu pago no pudo ser realizado pero no te preocupes paga en la clínica tu cita fue reservada ...',
            buttons:[
              {
                text:'ok'
              }
            ]
          });
          await alert.present();
          this.router.navigate(['mydates']);
  /*         this.navCtrl.setRoot(MyDatesPage); */
        }
        }
    ]
  });
  alert.present();
}

  payCulqi() {
    this.desactivadoBoton = false;
      console.log('this.price:', this.plan);
      if(this.currentAppointment){
        this.payCulqiCharges = true;
        this.openCulqi();
        return 
      }
    if (this.depe) {
      let id = this.depe._id;
      let provisionId = this.hora.params.provisionId;
      // console.log('lo que mando al proivider:', this.subida, id);
      this.crudPvr.createParentDate(this.subida, id, provisionId)
        .subscribe((data: any) => {
          this.currentAppointment = data;
          this.openCulqi();
        },err => {
            if (this.currentAppointment !== null) {
              this.openCulqi();
              return;
            }
            console.log('err', err);
            if (!err) {
              return
            }
            const code = err.error.data.errorCode;
            let alert;
            switch (code) {
              case 15006:
                // case 15035:
                alert = this.alertCtrl.create({
                  header: 'Aviso al Cliente',
                  message: 'Ya tienes una cita en una hora cercana a esta.',
                  buttons: [
                    {
                      text: 'Buscar otra hora',
                      handler: data => {
                        this.router.navigate(['card']);
                        /* this.navCtrl.setRoot(CardPage); */
                      }
                    }
                  ]
                });
                alert.present();
                break;

              case 15009:
              case 15035:
                alert = this.alertCtrl.create({
                  header: 'Aviso al Cliente',
                  message: 'El horario escogido ya fue tomado .',
                  buttons: [
                    {
                      text: 'Buscar otra hora',
                      handler: data => {
                        this.router.navigate(['card']);
/*                         this.navCtrl.setRoot(CardPage); */
                      }
                    }
                  ],
                });
                alert.present();
                break;

              default:
                break;
            }
          });
    } else {
      let provisionId = this.hora.params.provisionId;
      this.appointmentProvider.createAppointment(this.subida, provisionId)
        .subscribe((data: any) => {
          this.currentAppointment = data;
          console.log('currentAppointment:', this.currentAppointment);
          this.openCulqi();
        }
          , err => {
            if (this.currentAppointment !== null) {
              this.openCulqi();
              return;
            }
            console.log('err', err);
            if (!err) {
              return
            }
            const code = err.error.data.errorCode;
            let alert;
            switch (code) {
              case 15006:
                // case 15035:
                alert = this.alertCtrl.create({
                  header: 'Aviso al Cliente',
                  message: 'Ya tienes una cita en una hora cercana a esta.',
                  buttons: [
                    {
                      text: 'Buscar otra hora',
                      handler: data => {
                        this.router.navigate(['card']);
                        /* this.navCtrl.setRoot(CardPage); */
                      }
                    }
                  ]
                });
                alert.present();
                break;

              case 15009:
              case 15035:
                alert = this.alertCtrl.create({
                  header: 'Aviso al Cliente',
                  message: 'El horario escogido ya fue tomado .',
                  buttons: [
                    {
                      text: 'Buscar otra hora',
                      handler: data => {
                        this.router.navigate(['card']);
                        /* this.navCtrl.setRoot(CardPage); */
                      }
                    }
                  ],
                });
                alert.present();
                break;

              default:
                break;
            }
          });
    }
  }

  

  next() {
    let provisionId = this.hora.params.provisionId;
    this.desactivadoBotonLocal = false;
      this.appointmentProvider.createAppointment(this.subida , provisionId).subscribe(async (data:any) => {
        console.log('data devuelta:', data);
        if(data.ok == false){
          this.problemReserva(data);
        }else{
          const loading = await this.loadingCtrl.create({
            message: "creando cita"
          });
            await loading.present();  
            this.createCita();
            loading.dismiss();
          this.router.navigate(['home']);
          /* this.navCtrl.setRoot(HomePage); */
        }        
                         
    });  
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
  
  async problemReserva(data){
    const alert = await this.alertCtrl.create({
      header:"Problema de reserva",
      message:`${data.error.help}`,
      buttons: [
        {
        text: 'Buscar otro horario',
        handler: ()=>{
          this.router.navigate(['card']);
          /* this.navCtrl.push(CardPage); */
        }
      },{
        text: 'cancelar',
        handler: ()=>{
          this.router.navigate(['home']);
          /* this.navCtrl.push(HomePage); */
        }
      }
    ]
  });
  await alert.present();
  }

 /*  async loadingWaiting(){
      
  } */


  async nextDepe() {
    this.desactivadoBotonLocal = false;
    let id = this.depe._id;
    let provisionId = this.hora.params.provisionId;
    console.log('el id que va para creacion de familiar:', id)
    this.crudPvr.createParentDate(this.subida, id, provisionId).subscribe(data => {
      this.waitingCreate();
      this.createCita();
      this.router.navigate(['home']);
    });
    // queda pendiente el error, sino crea la cita
  }
  async waitingCreate(){
    const loading = await this.loadingCtrl.create({
      message: "creando cita"
    });
    await loading.present();
  }

  async createDate(){
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

}
