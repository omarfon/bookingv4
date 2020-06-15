import { Component, OnInit } from '@angular/core';
import { AuthorizationPublicService } from 'src/app/services/authorization-public.service';
import { ModalController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public msg;
  private pageFrom;
  private hora;
  private doctor;
  private available;
  private authPublic;
  public change = false;
  public datos;
  password_type: string = 'password';

  constructor(
    public userService: UserService,
    public alertCtrl: AlertController,
    public authPvr: AuthorizationPublicService,
    public modalCtrl: ModalController,
    public router: Router) { }

  ngOnInit() {
  /*   this.hora = this.navParams.get('hora');
    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available'); */
    const auto = localStorage.getItem('authorization');
    if(!auto){
      this.authPvr.getKey().subscribe(data =>{
        this.authPublic = data;
        localStorage.setItem('authorization', this.authPublic.authorization);
        localStorage.setItem('role', this.authPublic.role);
      });
  
      localStorage.removeItem('idTokenUser');
      localStorage.removeItem('emailUser');
    }else{
      return
    }

    // localStorage.removeItem('authorization');
    // localStorage.removeItem('role');
  }

  startSesion(formulario){
    this.userService.doSignIn(formulario.value.email.toLowerCase(), formulario.value.password)
    .subscribe(
     /*  if(data.status.error == 400 || data.status.error == 401 || DataCue.status.error == 402 */
      (data:any) => {
        /* if(data.ok == false){
          this.msg = data.message;
        let alert = this.alertCtrl.create({
          title: 'Error de Login',
          subTitle: `${this.msg}`,
          buttons: ['Volver a intentar']
        });
        alert.present();
        }else{ */
          console.log('data:', data);
        this.msg = "";
        localStorage.setItem('idTokenUser', data.patientId);
        localStorage.setItem('emailUser', formulario.value.email);
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
        localStorage.setItem('patientName', data.patientName);
        localStorage.setItem('image', data.photoUrl);
        // localStorage.setItem('')
/*         this.events.publish('user:logged', 'logged');
        this.events.publish('change:foto'); */
        if( !this.hora )
        this.router.navigate(['home']);
        /* this.navCtrl.push(HomePage ) */
        else
        this.router.navigate(['financer', data]);
         /*  this.navCtrl.push(FinancerPage, {hora: this.hora, available: this.available , doctor:this.doctor }); */
        /* } */
      }, async err =>{
        console.log(err);
        this.msg = err.error.message;
        const alert = await this.alertCtrl.create({
          header: 'Error de Login',
          message: `${this.msg}`,
          buttons: ['Volver a intentar']
        });
        await alert.present();
      });
  }

  registrarUsuario(){
   /*  if(this.hora !== undefined){
      this.router.navigate(['register'])
      this.navCtrl.setRoot(RegisterPage , {hora: this.hora, available: this.available, doctor: this.doctor, texto: "viene con data"});
    }
    else{
      this.router.navigate(['register']);
      this.navCtrl.push(RegisterPage, {texto: "vienen sin data"});
    } */
    this.router.navigate(['register']);
  }

  goToHome(){
    this.router.navigate(['home']);
    /* this.navCtrl.push(HomePage); */
  }

  async goToRecovery(){
    const alert = await this.alertCtrl.create({
      header:"Olvidaste tu contraseña...?",
      message:'Ingresa tu correo electronico',
      inputs :[
        {
          name:'email',
          placeholder:'email',
          type: 'email'
        }
      ],
      buttons :[
          {
            text:'Enviar',
            handler: data => {
              console.log('enviando correo electronico');
              let email = data.email;
              console.log('lo que se almacena en correo:', email);
              this.userService.sendValidation(email).subscribe(data =>{
                  this.datos = data;
                  console.log('this.datos:', this.datos);
                  if(this.datos.result == 'ok'){
                    this.router.navigate(['recovery', this.datos]);
                   /*  this.navCtrl.push(RecoverycodePage , {
                      datos:this.datos
                }); */
                  }else{
                    /* const alert = await this.alertCtrl.create({
                      header:"Correo no valido",
                      message:`${this.datos.error.message}`,
                      buttons: ['volver a intentar'],
                      cssClass: 'alertcss'
                  })
                  await alert.present() */
                  console.log('correo no valido levantar un alert o pintar un mensaje')
                  }
              })
            }
          }
      ]
    });
   await alert.present(); 
      /* this.navCtrl.push(RecoveryPage); */

    /* let modal = this.modalCtrl.create(LossPage, {
     dato:"1"
    });
    modal.present(); */
  }

  changeType(){
  // cambie el password type
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
  registrarUsuarioFacebook(){
    this.router.navigate(['faceform']);
    /* this.navCtrl.push(PagesFaceformPage); */
  }


}
