import { Component, OnInit } from '@angular/core';
import { Platform,ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  // lat: number = 51.678418;
  // lng: number = 7.809007;
  lat:number;
  lng:number;
  height = 0;

  constructor(public platform: Platform,private modalController: ModalController, private navParams: NavParams) {
    console.log(platform.height());
    this.height = platform.height() - 56;

    // this.lat = 51.678418;
    // this.lng = 7.809007;

    let coordsArray = this.navParams.get("coords").split(",");

    this.lat = Number(coordsArray[0].replace("geo:",""));
    this.lng = Number(coordsArray[1]);
    
    console.log( this.lat, this.lng );

    // console.log( this.navParams.get("coords") );
   }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalController.dismiss();
  }

}
