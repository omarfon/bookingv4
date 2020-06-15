import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { LoginPage } from './pages/login/login.page';
import { AuthorizationPublicService } from './services/authorization-public.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  public nombre;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    public autho: AuthorizationPublicService,
    public router: Router,
  ) {
    this.sideMenu();
    this.initializeApp();
    this.nombre = localStorage.getItem('patientName')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Mis Citas",
        url   : "/citas-pendientes",
        icon  : "alarm"
      },
      {
        title : "Reservar",
        url   : "/card",
        icon  : "analytics"
      },
      {
        title : "Recetas",
        url   : "/recetas",
        icon  : "clipboard"
      }/* ,
      {
        title : "Cerrar sesión",
        url   : "/recetas",
        icon  : "recipes"
      }, */
    ]
  }

  closeSession(){
      localStorage.clear();
      /* localStorage.removeItem('role');
      localStorage.removeItem('authorization');
      localStorage.removeItem('id');
      localStorage.removeItem('photoUrl');
      localStorage.removeItem('name');
      localStorage.removeItem('startPregnancy');
      localStorage.removeItem('email');
      localStorage.removeItem('usuario');
      localStorage.removeItem('patientName');
      localStorage.removeItem('token');
      localStorage.removeItem('uid'); */
      this.autho.getKey().subscribe( (data:any) =>{
        localStorage.setItem('authorization', data.authorization );
        localStorage.setItem('role', data.role);
      }) 
      this.router.navigate(['/login']);
      this.menu.close('start');
      console.log('cerrar sesión');
  }

  goToDetailDatos(){
    this.router.navigate(['datos-personales']);
  }
}
