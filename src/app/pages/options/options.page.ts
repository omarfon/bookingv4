import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from 'src/app/services/hello.service';
import { API_ENDPOINTIMG } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  public specialtyes;
  public scura;
  public scuida;
  public urlBase = API_ENDPOINTIMG;
  constructor(public router: Router, 
              public helloSrv: HelloService,
              public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getAllSpecialtys();
  }

  goToCardPage(scur){
    console.log(scur);
    this.helloSrv.especialidad = scur;
    this.router.navigate(['/card']);
   /*  this.navCtrl.push(CardPage); */
  }
  goToCardCuidaPage(scui){
    console.log(scui);
    this.helloSrv.especialidad = scui;
    this.router.navigate(['card-cuida']);
  }

  async getAllSpecialtys(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando las especialidades',
      duration:3000,
      translucent:true,
      backdropDismiss:true
    });
    await loading.present();
    this.helloSrv.getSpecialtys().subscribe((data:any) => {
      this.specialtyes = data.centers[0].services;
      console.log(this.specialtyes)
      this.scura = this.specialtyes.filter(x => {
        return x.block === 'cura'});
        this.scuida = this.specialtyes.filter(x => x.block === 'cuida');
        console.log(this.scura, this.scuida);
    })
  }
  

}
