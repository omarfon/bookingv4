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
  public desabilitadobutton = true;
  public formFamily: FormGroup;
  public createParents;
  public _parents;
  public actual;
  public doctor;
  public available;
  public hora;
  public price;
  public depe;

  constructor(public router: Router,
    public fb: FormBuilder,
    public dependentsPvr: DependensService,
    public loadingCtrl: LoadingController,
    public crudPvr: CrudparentService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.actual = moment().format('YYYY-MM-DD');

    this.formFamily = this.fb.group({
      name: ['', [Validators.required]],
      paternal_surname: ['', [Validators.required]],
      maternal_surname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      type_document: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      kindred: ['', [Validators.required]]
    });

    console.log('la data de formulario:', this.formFamily);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }



  async saveData() {
    this.desabilitadobutton = false;
    if (this.formFamily.valid) {

      /*       const loading = await this.loadingCtrl.create({
              message: 'Guardando datos de familiar.'
            }); */
      let datos = this.formFamily.value;
      let data: any = {
        relation: {
          id: 4,
          name: datos.kindred
        },
        name: datos.name,
        surname1: datos.paternal_surname,
        surname2: datos.maternal_surname,
        birthdate: moment(datos.date_of_birth).format('YYYY-MM-DD'),
        gender: {
          id: 2,
          name: datos.gender
        },
        documentType: {
          id: 1,
          name: datos.type_document
        },
        documentNumber: datos.dni
      }
      /*       await loading.present(); */
      this.crudPvr.createParent(data).subscribe(async data => {
        const loading = await this.loadingCtrl.create({
          message: 'Guardando datos de familiar.'
        });
        this.createParents = data;
        await loading.present();
        this.dependentsPvr.getDependens().subscribe(dat => {
          this._parents = dat;
          let datos =
          {
            parents: this._parents,
            doctor: this.doctor,
            available: this.available,
            proposedate: this.available,
            hora: this.hora,
            depe: this.depe,
            price: this.price
          }
          let dataArmada = JSON.stringify(datos)
          this.router.navigate(['myparents', dataArmada])
          this.modalCtrl.dismiss();
          loading.dismiss();
        });
      });
    } else {
      this.errorCreation();
      this.desabilitadobutton = true;
    }

  }

  async errorCreation() {
    let alert = await this.alertCtrl.create({
      header: 'Error en Creación',
      message: 'talvez faltan datos en el formulario o no estan todos los campos llenos',
      buttons: [
        {
          text: 'reintentar',
          role: 'cancel'
        }, {
          text: 'salir',
          handler: () => {
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
