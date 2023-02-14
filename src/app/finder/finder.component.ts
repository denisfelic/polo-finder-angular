import { Component } from '@angular/core';
import { GeoLocation } from '../types';
import { PoloService } from '../polo.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})

export class FinderComponent {

  geolocation: GeoLocation | undefined;
  hasUserLocation: boolean = false;

  constructor(
    private poloService: PoloService,
  ) { }

  ngOnInit() {
    this.requestUserLocation(false);
  }



  requestUserLocation(showLocalizationErrorPopup: boolean = true) {
    let hasLocationPermission = true;

    navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
      .then(function (PermissionStatus) {
        if (PermissionStatus.state == 'prompt') {
          navigator.geolocation.getCurrentPosition((position) => { });
        } else if (PermissionStatus.state !== "granted") {
          if (showLocalizationErrorPopup)
            alert('Yo should allow access to your location.')
          hasLocationPermission = false;
        }
      });

    this.getLocation();
  }

  private getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;


      this.poloService.userLocation = {
        latitude: latitude,
        longitude: longitude,
      }
      this.hasUserLocation = true;
    });
  }

}

