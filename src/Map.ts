import { User } from "./User";
import { Company } from "./Company";
import { Mappable } from "./MapInterface";

export class CustomMap {
  // making this variable private prevents other developers from being able to call this variable probably to change it usage
  private googleMap: google.maps.Map;

  constructor(mapDiv: HTMLElement, opt?: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(mapDiv, opt);
  }

  // better code
  addMarker(loc: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: loc.getLocation(),
    });
  }

  // semi good but still bad code style
  addMarkerTwo(pos: User | Company): void {
    new google.maps.Marker({ map: this.googleMap, position: pos.location });
  }

  //bad code
  addUserMarker(user: User): void {
    new google.maps.Marker({ map: this.googleMap, position: user.location });
  }

  // bad code
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({ map: this.googleMap, position: company.location });
  }
}

/**
 *
 * one thing we know for sure here is that this is a bad way to write code...there are a lot of duplicate code in the addUserMarker and
 * addCompanyMarker.
 */
