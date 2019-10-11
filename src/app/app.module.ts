import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapaPageModule } from '../app/mapa/mapa.module';

//mapas

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';

//Servicios
import { HistorialService } from '../app/providers/historial.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     MapaPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    HistorialService,
    InAppBrowser,
    Contacts,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
