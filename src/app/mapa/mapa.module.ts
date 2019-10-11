import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { MapaPage } from './mapa.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsRF73gl8u5aXmOCkJCfK5RbWBbvY6zKE'
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
