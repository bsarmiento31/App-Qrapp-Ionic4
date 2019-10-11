import { Component } from '@angular/core';
//Componentes
import { ToastController,Platform } from '@ionic/angular';
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//Servicios
import { HistorialService} from '../providers/historial.service';
import { MapaPage } from '../mapa/mapa.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  constructor(private barcodeScanner: BarcodeScanner,
              private toastController: ToastController, 
              private platform: Platform,
              private _historialService: HistorialService) {}

  scan(){
    // console.log("Mostrar"); 

    if( !this.platform.is('cordova')){
          // this._historialService.agregar_historial("http://google.com");
          // this._historialService.agregar_historial("geo: 51.678418,7.809007");
          this._historialService.agregar_historial( "MATMSG:TO:fernando.herrera85@gmail.com;SUB:Hola Mundo;BODY:Saludos Fernando;;" );

//           this._historialService.agregar_historial( `BEGIN:VCARD
// VERSION:2.1
// N:Kent;Clark
// FN:Clark Kent
// ORG:
// TEL;HOME;VOICE:12345
// TEL;TYPE=cell:67890
// ADR;TYPE=work:;;;
// EMAIL:clark@superman.com
// END:VCARD` );

//           return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      // console.log('Barcode data', barcodeData);
      console.log("result:",barcodeData.text);
      console.log("format:",barcodeData.format);
      console.log("cancelled:",barcodeData.cancelled);

      if( barcodeData.cancelled == false && barcodeData.text != null){
        this._historialService.agregar_historial(barcodeData.text);
      }


     }).catch(err => {
         console.log('Error', err);
         this.MostrarError('Error'+ err);
     });
  }

  async MostrarError( mensaje:string ) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }

}
