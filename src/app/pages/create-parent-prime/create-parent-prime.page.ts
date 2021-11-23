import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudparentService } from 'src/app/services/crudparent.service';
import { DependensService } from 'src/app/services/dependens.service';
import * as moment from 'moment';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-parent-prime',
  templateUrl: './create-parent-prime.page.html',
  styleUrls: ['./create-parent-prime.page.scss'],
})
export class CreateParentPrimePage implements OnInit {
  private desabilitado = true;
  public formFamily: FormGroup;
  public createParents;
  public _parents;
  public actual;
  public change;
  public name;
  public surname1;
  public surname2;
  public birthdate;
  public documentNumber;
  constructor(public router: Router,
              public fb: FormBuilder,
              public dependentsPvr: DependensService,
              public loadingCtrl: LoadingController,
              public crudPvr: CrudparentService,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
                this.actual = moment().format('YYYY-MM-DD');
    
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

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }



  async saveData(){
    this.desabilitado = false;
    if(this.formFamily.valid){

      const loading = await this.loadingCtrl.create({
        message: 'Guardando datos de familiar.'
      });
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
        await loading.present();
      this.crudPvr.createParent(data).subscribe(data =>{
        this.createParents = data;
        this.dependentsPvr.getDependens().subscribe(dat =>{
            this._parents = dat;
            
           /* this.navCtrl.push(MyparentsPage) */
          });
          loading.dismiss();
          this.router.navigate(['home']);
          this.closeModal();
      });
    }else{
      this.errorCreation();
      this.desabilitado = true;
    }
   
  }

  async errorCreation(){
    const alert = await this.alertCtrl.create({
      header:'Error en Creación',
      message: 'talvez faltan datos en el formulario o no estan todos los campos llenos',
      buttons:[
        {
          text:'reintentar',
          role:'cancel'
        },{
          text: 'salir',
          handler:()=>{
            this.router.navigate(['myparents']);
            /* this.navCtrl.setRoot(MyparentsPage); */
          }
        }
      
      ]
    });
    await alert.present();
  }

  desabilitadobutton():boolean{
    if(this.name && this.surname1 && this.surname2, this.birthdate, this.documentNumber){
      return true
    }else{
      return false
    }
  }

}
