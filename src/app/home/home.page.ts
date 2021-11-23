import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
//cambiando servicios
import { AppoinmentService } from '../services/appoinment.service';
import { AuthorizationPublicService } from '../services/authorization-public.service';
import { DependensService } from '../services/dependens.service';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { GetDatesTeleService } from '../services/get-dates-tele.service';
import { HelloService } from 'src/app/services/hello.service';
import { API_ENDPOINTIMG } from 'src/environments/environment';
import { DoctordataService } from './../services/doctordata.service';
import { UserprefComponent } from './../components/userpref/userpref.component';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  card: any = [];
  cardone: any = [];
  cardtwo: any = [];
  cardthree: any = [];
  itemExpanded: boolean = true;
  itemExpandHeight: number = 100;
  public citapendiente;
  public lastAppointment;

  public tasks : any =[] ;
  public _tasks;
  public ensenar;
  public nombre;
  public recipes;
  public recipendiente;
  public lastRecipe;

  public misCitas;
  public depesCitas ;
  public citasDepes;
  public diasFaltantes;
  public specialtyes;
  public urlBase = API_ENDPOINTIMG;
  public doctores;
 /*  private SERVERImage = Constants.IMAGESDOCTORS; */
  public mensaje:boolean = false;
  dependens: any;

  public slideOpts = {
    slidesPerView: 3,
    speed: 400
    }
    public slideOptsEspecialtyes = {
      slidesPerView: 5,
    speed: 400
    }
  public consultas;
  public cantConsultas;
  public doctors;
  public _doctors;
  public search: string = '';
  public openDoctors: boolean = false;
  constructor(
    public autho : AuthorizationPublicService,
    public alertCtrl: AlertController,
    public recipesPvr: RecipesService,
    public appointmentProvider : AppoinmentService,
    public dependensProvider: DependensService,
    public router: Router,
    public helloSrv: HelloService,
    public doctorDataSrv:DoctordataService,
    public popoverCtrl: PopoverController,
    public tcs: GetDatesTeleService) {}

     ngOnInit() {
       this.getAllSpecialtys();
      let dataLocal = JSON.parse(localStorage.getItem('authorization'));
      const nombrePatient = dataLocal.name;
      let separador = " ";
        if(nombrePatient){
            this.nombre = nombrePatient;
        }else{
          
        }
        this.getDependens();
          const authorization = localStorage.getItem('authorization');
          if( !authorization ){
            this.autho.getKey().subscribe((data:any) =>{
              console.log(data);
            localStorage.setItem('authorization', JSON.stringify(data));
              if(data.role == 'public'){
              }else{
                return
              }
          },(err:any)=>{
            console.log(err)
          this.nored();
    });
  }else{
    let rol = localStorage.getItem("role");
    if(rol && rol == 'user' ){
        this.obtenerUltimaFecha()
      }
  }
  this.getAllDoctors();
}

abrirModeloDoctors(event){
  if (this.search.length == 1) {
    this.doctors = [];
    this.openDoctors = false;
  }
  if(this.search.length == 0){
    this.openDoctors = false;
    return this.doctors = this._doctors;
  }
  this.openDoctors = true;

  this.doctors = this.doctors.filter(doctor => {
    this.doctors = doctor.fullname.toLowerCase().indexOf((this.search).toLowerCase()) != -1;
    return this.doctors;
  });
}

getAllDoctors(){
  this.helloSrv.getAllDoctors().subscribe((data:any) => {
    this.doctors = data; 
    this._doctors = data
    console.log(this.doctors);
  }, err => {
    console.log(err)
  })
}

goToDetailDoctor(doctor){
  this.doctorDataSrv.doctor = doctor;
  console.log('go to doctor:',doctor);
  this.router.navigate(['detail-doctor']);
  this.doctors = this._doctors;
  this.openDoctors = false;
  this.search = "";
}

    async nored(){
      const alert = await this.alertCtrl.create({
        header:'Problema con el servidor',
        message:'actualmente hay un problema con el servidor ,por favor, intenta nuevamente en unos minutos.',
        buttons: [
          {
          text:'Ok',
          role:'Cancel'
        }
      ]
      })
      await alert.present();
    }

    obtenerUltimaFecha(){
    this.appointmentProvider.getAppointmentsPeruser().subscribe((data:any) =>{
        if(data.ok == false){
          this.tasks = [];
         return
        }
          this.tasks = data;
          this.citapendiente = this.tasks.length;
          console.log('this.tasks:', this.tasks);
      });

      //llamadas en la carga las recetas mas recientes
          this.recipesPvr.getAllRecipes().subscribe((data:any) =>{
            
            if(data.ok == false){
              this.recipes = [];
              return
            }
                if(this.recipes = []){
                  this.mensaje = true
                }else{
                  this.mensaje = false
                }
            this.recipes = data;
            this.recipendiente = this.recipes.length;
            console.log('this._recipes:', this.recipes);
            const diaOne = moment(this.recipes.inicio_prescripcion);
            const diaTwo = moment(this.recipes.fin_prescripcion)
            this.diasFaltantes = diaOne.diff(diaTwo);
        });
    // citas de los dependientes
    this.dependensProvider.getdependesDay().subscribe((data:any) =>{
      if(data.ok == false){
        this.depesCitas = [];
        return
      }
      this.depesCitas = data;
      // console.log('this.depesCitas:', this.depesCitas);
      this.depesCitas.map(depe =>{
        if(depe.appointments == 0){
          console.log('los depes que no tienen citas', depe);
        }else{
          this.citasDepes = depe.appointments[0];
          console.log('los depe con citas:', this.citasDepes);
            if( this.recipes  && this.citasDepes){
                this.citapendiente = 2;
              }else{
                this.citapendiente = this.citapendiente;
              }
        }
      });
    });

  }
  getDependens(){
    this.dependensProvider.getDependens().subscribe(data => {
      this.dependens = data
      if(this.dependens.length > 0){
        this.dependens = this.dependens.length;
      }else{
        this.dependens = 0;
      }
    });
    console.log('los dependientes:',this.dependens);
  }

irACard(){
  this.router.navigate(['card']);
      }

goToOptions(){
  this.router.navigate(['options']);
  }
  goToAppointments(){
    this.router.navigate(['my-dates']);
  }
goToTele(){
  this.router.navigate(['telecon'])
}

  goToDates(){
    console.log('ir a mis recetas');
    this.router.navigate(['recipes']);
  }

  goToParents(){
    console.log('ir a mis parientes');
    this.router.navigate(['myparents']);
  }
  goToData(){
    this.router.navigate(['profile']);
  }
 /*  getDatesTele(){
    let idUser = localStorage.getItem('idTokenUser');
    this.tcs.getDatesConsulta(idUser).subscribe(data => {
      this.consultas = data;
      if(this.consultas.length > 0){
          this.cantConsultas = this.consultas.length;
      }else{
        this.cantConsultas = 0;
      }
    })
  } */

  async getAllSpecialtys(){
    this.helloSrv.getSpecialtys().subscribe((data:any) => {
      this.specialtyes = data.centers[0].services;
      console.log(this.specialtyes)
    })
  }

  async openDatosUser(event:any){
    const popover = await this.popoverCtrl.create({
      component:UserprefComponent,
      event:event
    });
    await popover.present();


    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
}

}