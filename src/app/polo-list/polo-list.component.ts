import { Component } from '@angular/core';
import { Polo } from '../types';
import { PoloService } from '../polo.service';

@Component({
  selector: 'app-polo-list',
  templateUrl: './polo-list.component.html',
  styleUrls: ['./polo-list.component.scss']
})
export class PoloListComponent {

  polos: Polo[] = [];

  constructor(
    private poloService: PoloService
  ) {
    this.polos = this.poloService.getAllPolos();
  }

  showDistance(): boolean {
    return this.poloService.userLocation !== undefined;
  }

}
