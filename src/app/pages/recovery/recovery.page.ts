import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudparentService } from 'src/app/services/crudparent.service';
import { HelloService } from 'src/app/services/hello.service';


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
  public recoveryData;
  public dataSend;
  public primero;
  public segundo;
  public tercero;
  public cuarto;
  constructor(public router: Router,
              public crudPvr:     CrudparentService,
              public form:        FormBuilder,
              public userService: UserService,
              public helloSrv: HelloService,
              public alertCtrl: AlertController,
              public loadingCtrl : LoadingController,
              public routes: ActivatedRoute) {      
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
    this.recoveryData = this.helloSrv.recoveryData;
    this.dataSend = this.helloSrv.dataSend;
    console.log(this.recoveryData, this.dataSend);
  }

  validacion(){
    const valid = this.formCode.value;
    if(valid.password == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  saveData(form){
    console.log(form)
    let datos = {
      code:`${this.primero}${this.segundo}${this.tercero}${this.cuarto}`,
      documentType: this.dataSend.documentType,
      dni:this.dataSend.documentNumber,
      id:this.recoveryData.id,
      password:this.formCode.value.password
    }
  this.userService.loginRecovery(datos).subscribe(data => {
        this.logeo = data;
        if(data){
              console.log('this.logeo:', this.logeo);
              this.recoverySuccess();
              this.router.navigate(['login']);
        }
      },err =>{
        console.log('el logeo:', this.logeo, err);
        this.logeo = err;
          this.erroCode();
      });
}

async recoverySuccess(){
  const alert = await this.alertCtrl.create({
    header:"Cuenta recuperada",
    message:"su cuenta se ha recuperado exitosamente, ahora haga login",
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
