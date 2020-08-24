import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToCardPage() {
    const datos = {
      escogido: 44
    }
    const data = JSON.stringify(datos);
    this.router.navigate(['/card', data]);
    /*  this.navCtrl.push(CardPage); */
  }

  goToCardPageTele() {
    const datos = {
      escogido: 845337
    }
    const data = JSON.stringify(datos);
    this.router.navigate(['card', data])
  }

  goToCardCuidaPage() {
    this.router.navigate(['card-cuida']);
  }

}
