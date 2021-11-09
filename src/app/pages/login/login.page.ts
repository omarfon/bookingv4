import { Component, OnInit } from '@angular/core';
import { AuthorizationPublicService } from 'src/app/services/authorization-public.service';
import { ModalController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DataBasicService } from 'src/app/services/data-basic.service';
import { NewsEndpointsService } from './../../services/news-endpoints.service';


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
  public document: number = 1;
  public dni: string;
  public typeDocument;
  public documentId;
  constructor(
    public userService: UserService,
    public alertCtrl: AlertController,
    public authPvr: AuthorizationPublicService,
    public modalCtrl: ModalController,
    public dataPvr: DataBasicService,
    public newsSrv: NewsEndpointsService,
    public router: Router) { 
     
        
    }

  ngOnInit() {
    const auto:any = localStorage.getItem('authorization');
    if(!auto){
      this.authPvr.getKey().subscribe(data =>{
        this.authPublic = data;
        localStorage.setItem('authorization', JSON.stringify(data));
      });
  
      localStorage.removeItem('idTokenUser');
      localStorage.removeItem('emailUser');
    }else{
      this.getDocuments();
    }
    this.getDocuments();
  }

  public getDocuments(){
    this.dataPvr.getDocuments().subscribe((documents:any) => {
         this.documents = documents;
         console.log('this.documents:', this.documents);
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
        this.router.navigate(['home']);
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
                    let data = JSON.stringify(this.datos)
                    this.router.navigate(['recovery', data]);
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
