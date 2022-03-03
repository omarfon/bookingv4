import { Component, OnInit } from '@angular/core';
import { AuthorizationPublicService } from 'src/app/services/authorization-public.service';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DataBasicService } from 'src/app/services/data-basic.service';
import { NewsEndpointsService } from './../../services/news-endpoints.service';
import { HelloService } from 'src/app/services/hello.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public msg;
  public pageFrom;
  public hora;
  public doctor;
  public available;
  public authPublic;
  public change = false;
  public datos;
  public password;
  public documents: Object[] = [];
  public document: number = null;
  public dni: string ;
  public typeDocument ;
  public documentId ;
  constructor(
    public userService: UserService,
    public alertCtrl: AlertController,
    public authPvr: AuthorizationPublicService,
    public modalCtrl: ModalController,
    public loading: LoadingController,
    public dataPvr: DataBasicService,
    public newsSrv: NewsEndpointsService,
    public helloSrv: HelloService,
    public router: Router) { 
     
        
    }

  ngOnInit() {

  }

  ionViewWillEnter(){
    const authorization:any = localStorage.getItem('authorization');
      if(!authorization) {
        this.authPvr.getKey().subscribe((data: any) => {
          localStorage.setItem('authorization', JSON.stringify(data));
          this.getDocuments();
        })
      }else{
        this.getDocuments();
      }
      console.log('constructor');
  }

  async getDocuments(){
    const loading = await this.loading.create({
      message : "Espere un segundo"
    })
    await loading.present();
    this.dataPvr.getDocuments().subscribe((documents:any) => {
         this.documents = documents;
         loading.dismiss();
         /* console.log('this.documents:', this.documents); */
     });
  }

  selectTypeDocument(event){
    this.typeDocument = event.detail.value;
    console.log(event, this.typeDocument);
      const documentType = this.typeDocument;
      if(documentType === 'D.N.I'){
          this.documentId = "1";
      }else if(documentType === 'C.E.'){
        this.documentId = "3";
        console.log(this.documentId);
      }else if(documentType === 'Pasaporte.'){
        this.documentId = "2";
        console.log(this.documentId);
      }else{
        this.documentId ="4";
      }
  }

  startSesion(){
    this.newsSrv.newLoginWithDni( this.documentId,this.dni, this.password).subscribe((data:any) => {
        console.log('data:', data);
        this.msg = "";
        localStorage.setItem('authorization', JSON.stringify(data));
        localStorage.setItem('name', data.name);
        localStorage.setItem('visto', 'ok');
        this.router.navigate(['home']);
        this.documentId = null;
        this.dni = "";
        this.password = "";
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
    this.router.navigate(['register']);
  }

  goToHome(){
    this.router.navigate(['home']);
  }

  async goToRecovery(){
    const alert = await this.alertCtrl.create({
      header:"Olvidaste tu contraseña...?",
      message:'Ingresa tu N° de documento para recuperar',
      inputs :[
        {
          name:'documento',
          placeholder:'Ingresa tu n° de documento',
          type: 'text'
        }
      ],
      buttons :[
          {
            text:'Enviar',
            handler: data => {
              console.log('enviando correo electronico');
              let document = data.documento;
              console.log('lo que se almacena en correo:', document);
              const dataSend = {
                documentNumber:  data.documento,
                documentType: {
                  id:"1",
                  name:"D.N.I"
                },
                app: 'ebooking'
              }
              this.userService.recoveryLogin(dataSend).subscribe(data =>{
                  this.datos = data;
                  console.log('this.datos:', this.datos);
                  if(this.datos.result == 'ok'){
                    this.helloSrv.recoveryData = this.datos;
                    this.helloSrv.dataSend = dataSend;
                    this.router.navigate(['recovery']);
                  }else{

                  console.log('correo no valido levantar un alert o pintar un mensaje')
                  }
              })
            }
          }
      ]
    });
   await alert.present(); 
  }


  registrarUsuarioFacebook(){
    this.router.navigate(['faceform']);
  }


}
