import { Component } from '@angular/core';
import { GeoLocation } from '../types';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})

export class FinderComponent {

  geolocation: GeoLocation | undefined;



  requestUserLocation() {
    navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
      .then(function (PermissionStatus) {
        if (PermissionStatus.state == 'prompt') {
          navigator.geolocation.getCurrentPosition((position) => { });
        } else if (PermissionStatus.state !== "granted") {
          alert('Yo should allow access to your location.')
        }
      });

    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      console.log(longitude, latitude);

    });
  }

}

