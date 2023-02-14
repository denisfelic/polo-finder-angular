import { Injectable } from '@angular/core';
import { Polo, CreatePoloDto, GeoLocation } from './types';

@Injectable({
  providedIn: 'root'
})
export class PoloService {

  userLocation: GeoLocation | undefined;

  private polos: Polo[] = [
    {
      id: 1,
      name: 'Univesp Vila Nova Curuça',
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
      address: 'Av. Getúlio Vargas, nº 1200 - Vila Nova Santana, Assis. CEP: 19807-130.	',
      city: 'São Paulo',
      state: 'SP',
      location: {
        latitude: -123,
        longitude: 213,
      }
    }
  ];

  constructor() { }

  createNewPolo(polo: CreatePoloDto) {
    // call from api
    const newPolo = {
      id: this.polos.length + 1,
      ...polo,
    };

    this.polos.push(newPolo);
  }

  getAllPolos(): Polo[] {
    if (this.userLocation)
      return this.polos;
    else {
      return this.getAllPolosFromUserLocalization();
    }
  }


  private getAllPolosFromUserLocalization(): Polo[] {

    // TODO: request for api all polos based on user location
    return this.polos.map(polo => ({
      distance: '7km',
      location: {
        latitude: -123,
        longitude: 213,
      },
      ...polo,
    }));

  }
}
