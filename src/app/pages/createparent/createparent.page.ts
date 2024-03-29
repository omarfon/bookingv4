import { Component, OnInit } from '@angular/core';
import { CrudparentService } from 'src/app/services/crudparent.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DependensService } from 'src/app/services/dependens.service';
import { FinancerService } from 'src/app/services/financer.service';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-createparent',
  templateUrl: './createparent.page.html',
  styleUrls: ['./createparent.page.scss'],
})
export class CreateparentPage implements OnInit {
  public formFamily: FormGroup;
  public parents;
  public _parents;
  public createParents;
  public actual;
  public doctor;
  public available;
  public hora;
  public price;
  public depe;
  public desabilitadobutton = true;

  constructor(
            public router: Router,
            public fb: FormBuilder,
            public dependentsPvr: DependensService,
            public crudPvr: CrudparentService,
            public loadingCtrl : LoadingController,
            public alertCtrl : AlertController,
            public modalCtrl: ModalController) { }

  ngOnInit() {
/*     this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available');
    this.hora = this.navParams.get('hora');
    this.price = this.navParams.get('price');
    this.depe = this.navParams.get('depe'); */
    this.actual = moment().format('YYYY-MM-DD');

    this.dependentsPvr.getDependens().subscribe(data =>{
        this.parents = data;
    })
    

          this.formFamily = this.fb.group({
            name            : ['', [ Validators.required ]],
            paternal_surname: ['', [ Validators.required ]],
            maternal_surname: ['', [ Validators.required ]],
            gender          : ['',[ Validators.required ]],
            date_of_birth   : ['',[ Validators.required ]],
            type_document   : ['', [ Validators.required ]],
            dni             : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
            // user_id         : [ localStorage.getItem('idTokenUser') ],
            kindred         : ['',[ Validators.required ]]
            // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
            // password        : [ String(Math.floor(Math.random() * 9e15)) ]
          });

          console.log('la data de formulario:', this.formFamily);
  }

  closeModal(){
    /* this.modalCtrl.dismiss(); */
    console.log('modal controler dismiss');
  }

  saveData(){
    this.desabilitadobutton = false;
    if(this.formFamily.valid){
      let datos = this.formFamily.value;
      let data:any ={
          relation :{
            id : 4,
            name : datos.kindred
          },
          name : datos.name,
          surname1 : datos.paternal_surname,
          surname2 : datos.maternal_surname,
          birthdate : moment(datos.date_of_birth).format('YYYY-MM-DD'),
          gender : {
            id :2,
            name: datos.gender
          },
          documentType : {
            id: 1,
            name:datos.type_document
          },
          documentNumber : datos.dni
        }
  
       
      this.crudPvr.createParent(data).subscribe(async data =>{
        const loading = await this.loadingCtrl.create({
          message: 'Guardando datos de familiar.'
        });
        this.createParents = data;
        await loading.present();
        this.dependentsPvr.getDependens().subscribe(dat =>{
            this._parents = dat;
          
           let datos = 
            {parents:this._parents,
              doctor:this.doctor,
              available: this.available,
              hora: this.hora,
              depe: this.depe,
              price: this.price
            }
          });
          let dataArmada = JSON.stringify(datos)
          this.router.navigate(['financer', dataArmada])
          loading.dismiss()
      });
    }else{  
        this.errorForm();
      this.desabilitadobutton = true;
    }
   
  }
  
  async errorForm(){
    let alert = await this.alertCtrl.create({
      header:'Error en Creación',
      message: 'talvez faltan datos en el formulario o no estan todos los campos llenos',
      buttons:[
        {
          text:'reintentar',
          role:'cancel'
        },{
          text: 'salir',
          handler:()=>{
            this.router.navigate(['home']);
            /* this.navCtrl.setRoot(HomePage); */
          }
        }
      
      ]
    });
    await alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateparentPage');
  }

}
