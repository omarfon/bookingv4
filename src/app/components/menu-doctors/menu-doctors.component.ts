import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-doctors',
  templateUrl: './menu-doctors.component.html',
  styleUrls: ['./menu-doctors.component.scss'],
})
export class MenuDoctorsComponent implements OnInit {

  constructor(public router: Router, public menu: MenuController) { }

  ngOnInit() {}

  openMenuDoctors() {
    this.menu.enable(true, 'secondary');
    this.menu.open('secondary');
  }

}
