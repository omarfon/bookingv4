import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DependensService } from 'src/app/services/dependens.service';
import { CrudparentService } from 'src/app/services/crudparent.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateParentPrimePage } from '../create-parent-prime/create-parent-prime.page';


@Component({
  selector: 'app-myparents',
  templateUrl: './myparents.page.html',
  styleUrls: ['./myparents.page.scss'],
})
export class MyparentsPage implements OnInit {

  openForm: boolean = false;
  public dependens;
  public _dependens;

  public formFamily: FormGroup;
  public createParents;
  public parents;
  public actual;
  public fecha;

  constructor(public router: Router,
              public fb: FormBuilder,
              public dependentsPvr: DependensService,
              public crudPvr: CrudparentService,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
          
                this.getDependens();
                this.formFamily = this.fb.group({
                  name            : ['', [ Validators.required ]],
                  paternal_surname: ['', [ Validators.required ]],
                  maternal_surname: ['', [ Validators.required ]],
                  gender          : ['',[ Validators.required ]],
                  date_of_birth   : ['',[ Validators.required ]],
                  type_document   : ['', [ Validators.required ]],
                  dni             : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
                  user_id         : [ localStorage.getItem('idTokenUser') ],
                  kindred         : ['',[ Validators.required ]]
                  // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
                  // password        : [ String(Math.floor(Math.random() * 9e15)) ]
                });
   }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.getDependens();
  }

  getDependens(){
    this.actual = moment().format('y');

    this.dependentsPvr.getDependens().subscribe((dependens:any) =>{
     this._dependens = dependens.map(dependend =>{
       dependend.edad = moment().diff(dependend.birthdate , 'years') ;
       return dependend;
     });
     this.dependens = this._dependens;

     console.log('los dependientes:', this._dependens);
    });
  }

  saveData(){
    let datos = this.formFamily.value;
    let data:any ={
        relation :{
          id : 4,
          name : datos.kindred
        },
        name : datos.name,
        surname1 : datos.paternal_surname,
        surname2 : datos.maternal_surname,
        birthdate : datos.date_of_birth,
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


    this.crudPvr.createParent(data).subscribe(data =>{
      this.createParents = data;
        this.dependentsPvr.getDependens().subscribe(dat =>{
          this.parents = dat;
          this.dependens = this.parents;
          console.log(this.parents);
      this.openForm = false;
        });
    });

  }
  activeAction(){
    console.log('botom slider');
  }

  async deleteParent(depe){
    console.log('lo que me trae depe', depe);
    let id = depe._id;
    let eliminado = depe.name;
    const alert = await this.alertCtrl.create({
        header:`eliminar de sus contactos a ${eliminado} ?`,
        message:'si desea continuar seleccione ok, sino es el caso cancele',
        buttons: [
          {
            text: 'Ok',
            handler: () =>{
              this.dependentsPvr.deleteDepend(id).subscribe(data=>{
                this.dependentsPvr.getDependens().subscribe(dato =>{
                  this._dependens = dato;
                  this.dependens = this._dependens;
                  console.log('lo que es ahora parientes', this.dependens);
                });
              });
            }
          },
          {
            text:'Cancel',
            role: 'Cancel',
            handler: ()=>{
              console.log('se le hace dismiss al alert');
              // alert.dismiss();
            }

          }
        ]
    });
    await alert.present();
  }

  async showForm(){
    let modal = await this.modalCtrl.create({
        component:CreateParentPrimePage,
        cssClass: 'my-custom-class'
    });
    await modal.present();
  }

}
