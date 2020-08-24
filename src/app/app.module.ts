import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";

//locale
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
import { registerLocaleData } from '@angular/common';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ComponentsModule,
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
