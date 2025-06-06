import { Component } from '@angular/core';
import { Partido } from '../../interfaces/partido';
import { FutbolService } from '../../services/futbol/futbol.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partidos',
  imports: [CommonModule],
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css'
})
export class PartidosComponent {
  partidos: Partido [] = [];

  constructor(private futbolService: FutbolService){}

  ngOnInit() {
    this.futbolService.obtenerInformacionFutbol().subscribe((data) => {
      this.partidos = data;
      console.log(this.partidos);
    });
  }
}
