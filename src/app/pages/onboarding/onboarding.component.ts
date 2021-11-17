import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationPublicService } from './../../services/authorization-public.service';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  public authPublic
  constructor(public router: Router, public authPvr: AuthorizationPublicService) {
    const auto:any = localStorage.getItem('authorization');
    if(!auto){
      this.authPvr.getKey().subscribe(data =>{
        this.authPublic = data;
        localStorage.setItem('authorization', JSON.stringify(data));
      });
   }
  }
  ngOnInit() {}

  goToLogin(){
    this.router.navigate(['login']);
  }

}
