import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-userpref',
  templateUrl: './userpref.component.html',
  styleUrls: ['./userpref.component.scss'],
})
export class UserprefComponent implements OnInit {

  constructor(public router:Router,
              public popoverCtrl: PopoverController) { }

  ngOnInit() {}

  goToDataUser(){
    this.router.navigate(['datos']);
    this.popoverCtrl.dismiss();
  }

}
