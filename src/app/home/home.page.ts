import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


//cambiando servicios
import { AppoinmentService } from '../services/appoinment.service';
import { AuthorizationPublicService } from '../services/authorization-public.service';
import { DependensService } from '../services/dependens.service';
import { RecipesService } from '../services/recipes.service';


import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetDatesTeleService } from '../services/get-dates-tele.service';
//inappbrowser
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



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

  public tasks: any = [];
  public _tasks;
  public ensenar;
  public nombre;
  public recipes;
  public recipendiente;
  public lastRecipe;

  public misCitas;
  public depesCitas;
  public citasDepes;
  public diasFaltantes;
  /*  private SERVERImage = Constants.IMAGESDOCTORS; */
  public mensaje: boolean = false;
  dependens: any;

  public slideOpts = {
    slidesPerView: 1,
    speed: 400
  }
  public consultas;
  public cantConsultas;

  constructor(
    public autho: AuthorizationPublicService,
    public alertCtrl: AlertController,
    public recipesPvr: RecipesService,
    public appointmentProvider: AppoinmentService,
    public dependensProvider: DependensService,
    public router: Router,
    public tcs: GetDatesTeleService,
    private iab: InAppBrowser) { }

  ngOnInit() {
    let nombrePatient = localStorage.getItem('patientName');
    let separador = " ";
    if (nombrePatient) {
      /* this.nombre = nombrePatient.split(separador ,  1); */
      this.nombre = nombrePatient;
    } else {
      console.log("seguir normal es invitado")
    }
    this.getDependens();
    this.getDatesTele();
    const authorization = localStorage.getItem('authorization');
    if (!authorization) {
      this.autho.getKey().subscribe((data: any) => {
        localStorage.setItem('authorization', data.authorization);
        // localStorage.setItem('idTokenUser', data.patientId);
        localStorage.setItem('role', data.role);
        if (data.role == 'public') {
        } else {
          this.obtenerUltimaFecha()
        }
      }, (err: any) => {
        this.nored();
      });
    } else {
      let rol = localStorage.getItem("role");
      if (rol && rol == 'user') {
        this.obtenerUltimaFecha()
      }
    }
  }
  ionViewWillEnter() {
    let nombrePatient = localStorage.getItem('patientName');
    let separador = " ";
    if (nombrePatient) {
      /* this.nombre = nombrePatient.split(separador ,  1); */
      this.nombre = nombrePatient;
    } else {
      console.log("seguir normal es invitado")
    }
    this.getDependens();
    const authorization = localStorage.getItem('authorization');
    if (!authorization) {
      this.autho.getKey().subscribe((data: any) => {
        localStorage.setItem('authorization', data.authorization);
        // localStorage.setItem('idTokenUser', data.patientId);
        localStorage.setItem('role', data.role);
        if (data.role == 'public') {
        } else {
          this.obtenerUltimaFecha()
        }
      }, (err: any) => {
        this.nored();
      });
    } else {
      let rol = localStorage.getItem("role");
      if (rol && rol == 'user') {
        this.obtenerUltimaFecha()
      }
    }
  }

  openVideo() {
    const browser = this.iab.create('https://aviva.pe');
  }

  async nored() {
    const alert = await this.alertCtrl.create({
      header: 'Problema con el servidor',
      message: 'actualmente hay un problema con el servidor ,por favor, intenta nuevamente en unos minutos.',
      buttons: [
        {
          text: 'Ok',
          role: 'Cancel'
        }
      ]
    })
    await alert.present();
  }

  obtenerUltimaFecha() {
    // citas del usuario principal
    this.appointmentProvider.getAppointmentsPeruser().subscribe((data: any) => {
      if (data.ok == false) {
        this.tasks = [];
        return
      }
      this.tasks = data;
      this.citapendiente = this.tasks.length;
      console.log('this.tasks:', this.tasks);
    });
    //llamadas en la carga las recetas mas recientes
    this.recipesPvr.getAllRecipes().subscribe((data: any) => {

      if (data.ok == false) {
        this.recipes = [];
        return
      }
      if (this.recipes = []) {
        this.mensaje = true
      } else {
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
    this.dependensProvider.getdependesDay().subscribe((data: any) => {
      if (data.ok == false) {
        this.depesCitas = [];
        return
      }
      this.depesCitas = data;
      // console.log('this.depesCitas:', this.depesCitas);
      this.depesCitas.map(depe => {
        if (depe.appointments == 0) {
          console.log('los depes que no tienen citas', depe);
        } else {
          this.citasDepes = depe.appointments[0];
          console.log('los depe con citas:', this.citasDepes);
          if (this.recipes && this.citasDepes) {
            this.citapendiente = 2;
          } else {
            this.citapendiente = this.citapendiente;
          }
        }
      });
    });

    //     if(this.tasks > 1){
    //     const citasAll = {...this.tasks, ...this.depesCitas};
    //     console.log('todas las citas, incluidas las de principal:', citasAll);
    // }else{
    //     const citasAll = {...this.depesCitas};
    //     console.log('citas solo los dependientes', citasAll);
    // }

  }
  getDependens() {
    this.dependensProvider.getDependens().subscribe(data => {
      this.dependens = data
      if (this.dependens.length > 0) {
        this.dependens = this.dependens.length;
      } else {
        this.dependens = 0;
      }
    });
    console.log('los dependientes:', this.dependens);
  }

  irACard() {
    this.router.navigate(['card']);
  }

  goToOptions() {
    this.router.navigate(['options']);
  }
  goToAppointments() {
    this.router.navigate(['my-dates']);
  }
  goToTele() {
    this.router.navigate(['telecon'])
  }

  goToDates() {
    console.log('ir a mis recetas');
    this.router.navigate(['recipes']);
  }

  goToParents() {
    console.log('ir a mis parientes');
    this.router.navigate(['myparents']);
  }
  goToData() {
    this.router.navigate(['profile']);
  }
  getDatesTele() {
    let idUser = localStorage.getItem('idTokenUser');
    this.tcs.getDatesConsulta(idUser).subscribe(data => {
      this.consultas = data;
      if (this.consultas.length > 0) {
        this.cantConsultas = this.consultas.length;
      } else {
        this.cantConsultas = 0;
      }
    })
  }

}
