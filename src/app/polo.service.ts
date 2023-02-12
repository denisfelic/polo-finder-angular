import { Injectable } from '@angular/core';
import { Polo } from './types';

@Injectable({
  providedIn: 'root'
})
export class PoloService {

  hasUserDistance: boolean = false;

  constructor() { }

  getAllPolos(): Polo[] {
    return [
      {
        id: 1,
        name: 'Univesp Vila Nova Curuça',
        distance: '7km',
        address: 'Av. Getúlio Vargas, nº 1200 - Vila Nova Santana, Assis. CEP: 19807-130.	',
        city: 'São Paulo',
        state: 'SP',
        location: {
          latitude: -123,
          longitude: 213,
        }
      },
      {
        id: 2,
        name: 'Univesp Carrão',
        distance: '7km',
        address: 'Av. Getúlio Vargas, nº 1200 - Vila Nova Santana, Assis. CEP: 19807-130.	',
        city: 'São Paulo',
        state: 'SP',
        location: {
          latitude: -123,
          longitude: 213,
        }
      }
    ];
  }
}
