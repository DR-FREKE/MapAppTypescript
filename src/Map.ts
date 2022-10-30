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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: loc.getLocation(),
    });

    marker.addListener("click", () => {
      const info = new google.maps.InfoWindow({ content: loc.getContent() });
      info.open(this.googleMap, marker);
    });
  }

  // semi good but still bad code style. The problem with this style is that there is now a dependency between the CustomMap class and the
  // different other classes representing something that we might want to put on the map in our application. With the style above, you can
  // now have something called dependency injection and dependency inversion. Actually we're also using dependency injection here too but the style
  // above adds dependency inversion which works better.
  addMarkerTwo(pos: User | Company): void {
    new google.maps.Marker({ map: this.googleMap, position: pos.location });
  }

  //bad code. too specific on the type of composition
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
