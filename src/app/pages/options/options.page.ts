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

  goToCardPage(){
    this.router.navigate(['/card']);
   /*  this.navCtrl.push(CardPage); */
  }
  goToCardCuidaPage(){
    this.router.navigate(['cardcuida']);
  }
  
}
