import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../providers/historial.service';
import { ScanData } from '../../models/scan-data.model';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
})
export class GuardadosPage implements OnInit {

  historial:ScanData[] = [];
    
  constructor( private _historialService:HistorialService ) { }

  ngOnInit() {

    this.historial = this._historialService.cargar_historial();
  }

  abrir_scan( index:number ){
      this._historialService.abrir_scan( index );
  }

}
