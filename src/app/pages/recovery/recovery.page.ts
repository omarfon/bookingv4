import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudparentService } from 'src/app/services/crudparent.service';


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  public datos;
  public formCode: FormGroup;
  public code;
  public logeo;

  constructor(public router: Router,
              public crudPvr:     CrudparentService,
              public form:        FormBuilder,
              public userService: UserService,
              public alertCtrl: AlertController,
              public loadingCtrl : LoadingController,
              public routes: ActivatedRoute) {

                const data = this.routes.snapshot.paramMap.get('data');
                this.datos = JSON.parse(data);
                console.log(data);
                /* this.datos = this.navParams.get('datos'); */
                console.log(this.datos);
        
                this.formCode = this.form.group({
                  primero : [],
                  segundo : [],
                  tercero : [],
                  cuarto  : [],
                  password   : ['', [Validators.required]],
                  passwordRepeat   : ['', [Validators.required]]
              });
               }

  ngOnInit() {
  }

  validacion(){
    const valid = this.formCode.value;
    if(valid.password == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  saveData(){
    let codigo = this.formCode.value;
    // console.log('codigo:', codigo);
    let uno = codigo.primero;
    let dos = codigo.segundo;
    let tres = codigo.tercero;
    let cuatro = codigo.cuarto;
    let code = uno + dos + tres + cuatro;
    // console.log(code);
    this.datos.code = code;
    this.datos.password = this.formCode.value.password;
    console.log('datos.code:', this.datos);
    // this.datos.id = this.code.id;
    // console.log('data armada:', this.datos);

  this.userService.recoveryLogin(this.datos).subscribe(data => {
        this.logeo = data;
        if(data){
          localStorage.setItem('usuario', this.logeo.userEmail);
           localStorage.setItem('email', this.logeo.userEmail);
           localStorage.setItem('authorization', this.logeo.authorization);
           localStorage.setItem('id', this.logeo.patientId);
           localStorage.setItem('role', this.logeo.role);
           localStorage.setItem('photoUrl', this.logeo.photoUrl);
           localStorage.setItem('patientName', this.logeo.patientName);
              console.log('this.logeo:', this.logeo);
              this.recoverySuccess();
              this.router.navigate(['login']);
        }
            /* this.navCtrl.setRoot(LoginPage); */
      },err =>{
        console.log('el logeo:', this.logeo);
          this.erroCode();
      });
}

async recoverySuccess(){
  const alert = await this.alertCtrl.create({
    header:"Cuenta recuperada",
    message:"su cuenta se ha recuperado exitosamente",
    buttons: [
      {
        text:'ok'
      }
    ]
  })
  await alert.present();
}

async erroCode(){
  const alert = await this.alertCtrl.create({
    header:`Error en la recuperación`,
    message:`${this.logeo.error.message}`,
    buttons: ['volver a intentar']
  });
  await alert.present();
}

goToLogin(){
  this.router.navigate(['login']);
  /* this.navCtrl.setRoot(LoginPage); */
}
}
