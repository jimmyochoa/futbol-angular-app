import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from '../../interfaces/partido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FutbolService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/datos.json'

  obtenerInformacionFutbol(): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(this.apiUrl);
  }
}
